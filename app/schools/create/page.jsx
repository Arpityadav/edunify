'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
export default function AddSchool() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageFile, setImageFile] = useState(null);
    const router = useRouter()

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('address', data.address);
        formData.append('city', data.city);
        formData.append('state', data.state);
        formData.append('contact', data.contact);
        formData.append('email_id', data.email_id);
        formData.append('image', imageFile);

        try {
            const response = await fetch('/api/addSchool', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                router.push('/schools/show');
            } else {
                console.log(response)
                alert('Error adding school. Please try again.');
            }
        } catch (error) {
            console.error('Error adding school:', error);
            alert(`Error adding school. ${error}`);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add School</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                        School Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                    <label htmlFor="address" className="block text-lg font-medium text-gray-700">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        {...register('address', { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.address && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                    <label htmlFor="city" className="block text-lg font-medium text-gray-700">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        {...register('city', { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.city && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                    <label htmlFor="state" className="block text-lg font-medium text-gray-700">
                        State
                    </label>
                    <input
                        type="text"
                        id="state"
                        {...register('state', { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.state && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                    <label htmlFor="contact" className="block text-lg font-medium text-gray-700">
                        Contact
                    </label>
                    <input
                        type="text"
                        id="contact"
                        {...register('contact', { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.contact && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                    <label htmlFor="email_id" className="block text-lg font-medium text-gray-700">
                        Email ID
                    </label>
                    <input
                        type="email"
                        id="email_id"
                        {...register('email_id', { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email_id && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                    <label htmlFor="image" className="block text-lg font-medium text-gray-700">
                        School Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        {...register('image', { required: true })}
                        onChange={(e) => setImageFile(e.target.files[0])}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.image && <span className="text-red-500">This field is required</span>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
                >
                    Add School
                </button>
            </form>
        </div>
    );
}
