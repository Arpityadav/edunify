import db from '../../../lib/db';

export async function GET(request) {
    try {
        const [rows] = await db.query('SELECT name, address, city, image FROM schools');
        return new Response(JSON.stringify(rows));
    } catch (error) {
        console.error('Error fetching schools:', error);
        return new Response(null, { status: 500 });
    }
}