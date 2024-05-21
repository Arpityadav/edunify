export default function SchoolCard({ school }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={`${school.image}`}
                alt={school.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{school.name}</h2>
                <p className="text-gray-700">{school.address}</p>
                <p className="text-gray-700">{school.city}</p>
            </div>
        </div>
    );
}