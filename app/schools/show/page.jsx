'use client';

import { useEffect, useState } from 'react';
import SchoolCard from "@/app/schools/show/SchoolCard";

export default function ShowSchools() {
    const [schools, setSchools] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const response = await fetch('/api/getSchools');
                const schools = await response.json();
                setSchools(schools);
            } catch (error) {
                console.error('Error fetching schools:', error);
            }
        };

        fetchSchools();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredSchools = schools.filter((school) =>
        `${school.name} ${school.city}`.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="max-w-6xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Schools</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by name or city"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredSchools.map((school) => (
                        <SchoolCard key={school.name} school={school} />
                    ))}
                </div>
            </div>
        </div>
    );
}