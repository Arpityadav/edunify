import db from '../../../lib/db';
import fs from 'fs/promises';
import path from 'path';

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

        // Save the image file to the server
        const imagePath = `/schoolImages/${imageFile.name}`;
        const filePath = path.join(process.cwd(), 'public', imagePath);
        const fileBuffer = await imageFile.arrayBuffer();

        await fs.writeFile(filePath, Buffer.from(fileBuffer));

        // Insert the school data into the database
        await db.query(
            'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, address, city, state, contact, imagePath, email_id]
        );

        return new Response('School added successfully!', { status: 200 });
    } catch (error) {
        console.error('Error adding school:', error);
        return new Response('Error adding school. Please try again.', { status: 500 });
    }
}