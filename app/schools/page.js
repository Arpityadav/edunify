'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/db';

export default function ShowSchools() {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const [rows] = await db.query('SELECT name, address, city, image FROM schools');
                setSchools(rows);
            } catch (error) {
                console.error('Error fetching schools:', error);
            }
        };

        fetchSchools();
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Schools</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {schools.map((school) => (
                    <div key={school.name} className="border border-gray-300 rounded p-4">
                        <h2 className="text-xl font-bold">{school.name}</h2>
                        <p>{school.address}</p>
                        <p>{school.city}</p>
                        <img src={`/${school.image}`} alt={school.name} className="w-full h-48 object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}