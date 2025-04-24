// src/components/HotelSearch.jsx
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function HotelSearch() {
    const [hotels, setHotels] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    // 1) récupération des hôtels
    useEffect(() => {
        axios
            .get('/api/hotels')
            .then(({ data }) => setHotels(data))
            .catch(err => console.error(err))
    }, [])

    // 2) on filtre selon le terme saisi
    const filtered = hotels.filter(h => {
        const term = searchTerm.toLowerCase()
        return (
            h.name.toLowerCase().includes(term) ||
            h.city.toLowerCase().includes(term) ||
            h.starRating.toString().includes(term) ||
            h.amenities.some(a => a.toLowerCase().includes(term))
        )
    })

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Rechercher nom, ville, étoiles, équipements…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            />

            <table className="min-w-full bg-white">
                <thead>
                <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2">Nom</th>
                    <th className="px-4 py-2">Ville</th>
                    <th className="px-4 py-2">Étoiles</th>
                    <th className="px-4 py-2">Équipements</th>
                </tr>
                </thead>
                <tbody>
                {filtered.map(h => (
                    <tr key={h.id} className="hover:bg-gray-50">
                        <td className="border px-4 py-2">{h.name}</td>
                        <td className="border px-4 py-2">{h.city}</td>
                        <td className="border px-4 py-2">{h.starRating}</td>
                        <td className="border px-4 py-2">{h.amenities.join(', ')}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {filtered.length === 0 && (
                <p className="mt-4 text-center text-gray-500">
                    Aucun hôtel ne correspond à votre recherche.
                </p>
            )}
        </div>
    )
}
