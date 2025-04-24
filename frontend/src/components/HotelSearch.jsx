// SearchPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function SearchPage() {
    const [destination, setDestination] = useState('');
    const [guests, setGuests] = useState(1);

    // → filtres chambre
    const [roomType, setRoomType] = useState('');
    const [beds, setBeds] = useState(1);
    const [amenities, setAmenities] = useState([]);

    const [depart, setDepart] = useState('');
    const [retour, setRetour] = useState('');

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchHotels() {
        setLoading(true);
        try {
            const response = await axios.get('/api/hotels', {
                params: {
                    destination,
                    guests,
                    roomType,
                    beds,
                    amenities: amenities.join(','),
                    departure: depart,
                    return: retour,
                }
            });
            setHotels(response.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    function toggleAmenity(name) {
        setAmenities(prev =>
            prev.includes(name)
                ? prev.filter(a => a !== name)
                : [...prev, name]
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Choisissez votre destination</h1>

            {/* Barre de filtres */}
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Où Allez-Vous ?"
                        value={destination}
                        onChange={e => setDestination(e.target.value)}
                        className="flex-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <select
                        value={guests}
                        onChange={e => setGuests(Number(e.target.value))}
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        {[1,2,3,4,5].map(n => (
                            <option key={n} value={n}>{n} personne{n>1&&'s'}</option>
                        ))}
                    </select>
                </div>

                {/* filtres chambre */}
                <div className="flex items-center space-x-2">
                    <select
                        value={roomType}
                        onChange={e => setRoomType(e.target.value)}
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Type de chambre</option>
                        <option value="simple">Simple</option>
                        <option value="double">Double</option>
                        <option value="suite">Suite</option>
                    </select>

                    <select
                        value={beds}
                        onChange={e => setBeds(Number(e.target.value))}
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value={1}>1 lit</option>
                        <option value={2}>2 lits</option>
                        <option value={3}>3 lits</option>
                    </select>
                </div>

                {/* case à cocher équipements */}
                <div className="flex space-x-4">
                    {['Wi-Fi','Petit-déj','Piscine','Parking'].map(name => (
                        <label key={name} className="inline-flex items-center space-x-1">
                            <input
                                type="checkbox"
                                checked={amenities.includes(name)}
                                onChange={() => toggleAmenity(name)}
                                className="form-checkbox h-5 w-5 text-purple-600"
                            />
                            <span className="text-sm">{name}</span>
                        </label>
                    ))}
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-2">
                    <input
                        type="date"
                        value={depart}
                        onChange={e => setDepart(e.target.value)}
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="date"
                        value={retour}
                        onChange={e => setRetour(e.target.value)}
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Bouton */}
                <button
                    onClick={fetchHotels}
                    disabled={loading}
                    className="w-full bg-purple-700 text-white rounded-lg py-3 font-semibold hover:bg-purple-800 transition"
                >
                    {loading ? 'Chargement…' : 'Trouver un match'}
                </button>
            </div>

            {/* Résultats */}
            <div className="mt-8 space-y-4">
                {!loading && hotels.length === 0 && (
                    <p className="text-center text-gray-500">Aucun résultat pour ces critères.</p>
                )}
                {hotels.map(h => (
                    <div key={h.id} className="border p-4 rounded-lg flex items-center space-x-4">
                        <img src={h.image} alt={h.name} className="w-24 h-16 object-cover rounded-md" />
                        <div>
                            <h2 className="text-lg font-semibold">{h.name}</h2>
                            <p className="text-sm text-gray-600">{h.location}</p>
                            <p className="mt-1 font-semibold">{h.price}€ / nuit</p>
                            <p className="text-xs text-gray-500">Chambre : {h.roomType}, {h.beds} lit(s)</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
