import React, { useEffect, useState } from 'react';

export default function ReservationDetailsPage() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetch('/api/reservations/detailed')
            .then(res => res.json())
            .then(json => setReservations(json.data))
            .catch(err => {
                console.error(err);
                alert('Erreur lors du chargement des réservations');
            });
    }, []);

    return (
        <div className="flex flex-col md:flex-row p-6 gap-6">

            {/* Colonne gauche : visuel hôtel + chambre */}
            <div className="flex-1 space-y-4">
                {reservations.map((r, i) => (
                    <div key={i} className="rounded-lg overflow-hidden shadow-lg relative">
                        <img
                            src={`https://source.unsplash.com/600x400/?hotel,room,${i}`}
                            alt="hotel preview"
                            className="w-full h-40 object-cover"
                        />
                        <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 w-full">
                            <h3 className="font-semibold text-lg">{r.hotel.name}</h3>
                            <p className="text-sm">{r.hotel.city}</p>
                            <p className="text-sm">Chambre {r.room.number} - {r.room.type}</p>
                            <p className="text-xs">{r.checkIn} ➞ {r.checkOut}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Colonne droite : infos client + prix */}
            <div className="flex-1 space-y-4">
                {reservations.map((r, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
                    >
                        <div>
                            <p className="font-semibold text-gray-800">{r.user.firstName}</p>
                            <p className="text-sm text-gray-500">Statut : {r.status}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-gray-800">{r.room.pricePerNight}€</p>
                            <p className="line-through text-sm text-gray-400">{r.totalPrice}€</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
