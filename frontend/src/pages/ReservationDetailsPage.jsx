import React, { useEffect, useState } from 'react';

export default function ReservationDetailsPage() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetch('/api/reservations/detailed')
            .then(res => res.json())
            .then(json => setReservations(json.data.slice(0, 9)))
            .catch(err => {
                console.error(err);
                alert('Erreur lors du chargement des réservations');
            });
    }, []);

    return (
        <div className="flex p-6 gap-6">
            <div className="flex flex-col w-[434px] h-[225px]">
                {reservations.slice(0, 4).map((r, i) => (
                    <div key={i} className="w-full h-[200px] relative shadow-lg">
                        <img
                            src={`https://picsum.photos/800/400?random=${i}`}
                            alt="Aperçu hôtel"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                            <h3 className="text-lg font-bold">{r.hotel.name}</h3>
                            <p className="text-sm">{r.hotel.city}</p>
                            <p className="text-sm">Chambre {r.room.number} - {r.room.type}</p>
                            <p className="text-sm">⭐ {r.user.rating || "4.9"}(1458 avis)</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-1 w-full md:w-1/2">
                {reservations.map((r, i) => (
                    <div
                        key={i}
                        className="w-[90%] h-[90px] bg-white p-4 flex justify-between items-center shadow-lg rounded-md"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gray-300" />
                            <div>
                                <p className="font-semibold text-gray-900">{r.user.firstName} {r.user.lastName}</p>
                                <p className="text-sm text-gray-500">⭐ {r.user.rating || "4.9"}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-right">
                            <p className="text-lg font-bold text-black">{r.room.pricePerNight}€</p>
                            <p className="text-lg font-bold text-black line-through">{r.totalPrice}€</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
