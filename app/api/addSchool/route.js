import db from '../../../lib/db';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';


const s3 = new S3Client({
    region: process.env.NETLIFY_AWS_REGION,
    credentials: {
        accessKeyId: process.env.NETLIFY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NETLIFY_AWS_SECRET_ACCESS_KEY,
    },
});

export async function POST(request) {
    try {
        const formData = await request.formData();
        const name = formData.get('name');
        const address = formData.get('address');
        const city = formData.get('city');
        const state = formData.get('state');
        const contact = formData.get('contact');
        const email_id = formData.get('email_id');
        const imageFile = formData.get('image');

        // Check the image size (less than 10MB)
        if (imageFile.size > 5 * 1024 * 1024) {
            return new Response('Image size exceeds 5MB limit', { status: 400 });
        }

        // Convert the image file to a buffer
        const fileBuffer = Buffer.from(await imageFile.arrayBuffer());

        // Upload the image to S3
        const s3Params = {
            Bucket: process.env.NETLIFY_AWS_S3_BUCKET_NAME,
            Key: `schoolImages/${imageFile.name}`,
            Body: fileBuffer,
            ContentType: imageFile.type,
        };

        const command = new PutObjectCommand(s3Params);
        await s3.send(command);

        // Construct the image URL
        const imageUrl = `https://${process.env.NETLIFY_AWS_S3_BUCKET_NAME}.s3.${process.env.NETLIFY_AWS_REGION}.amazonaws.com/schoolImages/${imageFile.name}`;

        // Insert the school data into the database
        await db.query(
            'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, address, city, state, contact, imageUrl, email_id]
        );

        return new Response('School added successfully!', { status: 200 });
    } catch (error) {
        console.error('Error adding school:', error);
        return new Response('Error adding school. Please try again.', { status: 500 });
    }
}
