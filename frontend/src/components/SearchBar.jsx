import React, { useState } from 'react';
import { fetchRooms } from '../api/rooms';

const STOP_WORDS = [
    'le','la','les','de','des','du','un','une','et','avec','pour','en',
    'au','aux','à','dans','sur','sous','chez','par','que','qui'
];

export default function SearchBar() {
    const [input, setInput] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [rooms, setRooms] = useState([]);

    const handleSearch = async e => {
        e.preventDefault();

        const terms = input
            .toLowerCase()
            .split(/\s+/)
            .filter(w => w && !STOP_WORDS.includes(w));

        try {
            const data = await fetchRooms({
                keywords: terms,
                startDate,
                endDate,
            });
            setRooms(data);
        } catch (err) {
            console.error(err);
            alert('Erreur pendant la recherche : ' + err.message);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <form onSubmit={handleSearch} className="flex flex-wrap gap-2 mb-6">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Rechercher chambre, hôtel, ville…"
                    className="flex-1 border rounded px-3 py-2"
                />
                <input
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    className="border rounded px-3 py-2"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    className="border rounded px-3 py-2"
                />
                <button
                    type="submit"
                    className="px-4 bg-pink-800 text-white rounded hover:bg-pink-900"
                >
                    Rechercher
                </button>
            </form>

            {rooms.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 text-left">N° Chambre</th>
                            <th className="p-2 text-left">Type</th>
                            <th className="p-2 text-center">Capacité</th>
                            <th className="p-2 text-right">Prix (€)</th>
                            <th className="p-2 text-left">Équipements</th>
                            <th className="p-2 text-left">Hôtel</th>
                            <th className="p-2 text-left">Ville</th>
                            <th className="p-2 text-center">Disponibilité</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rooms.map(r => (
                            <tr key={r.roomId} className="border-t">
                                <td className="p-2">{r.roomNumber}</td>
                                <td className="p-2">{r.roomType}</td>
                                <td className="p-2 text-center">{r.capacity}</td>
                                <td className="p-2 text-right">{r.price}</td>
                                <td className="p-2">{r.amenities.join(', ')}</td>
                                <td className="p-2">{r.hotelName}</td>
                                <td className="p-2">{r.hotelCity}</td>
                                <td className="p-2 text-center">
                                    {r.available ? (
                                        <span className="text-green-600 font-semibold">Disponible</span>
                                    ) : (
                                        <span className="text-red-600 font-semibold">Non dispo</span>
                                    )}
                                </td>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">Aucun résultat</p>
            )}
        </div>
    );
}
