import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

export default function NegoPage() {
    const { id } = useParams();
    const [nego, setNego] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        fetch(`/api/negotiation-offers/${id}`)
            .then(res => res.json())
            .then(data => {
                setNego(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Chargement…</p>;
    if (!nego) return <p>Aucune offre de négociation.</p>;

    return (
        <div className="p-4 mx-auto font-sans">
            {/* Header */}
            <div className="text-center mb-4">
                <img
                    src="/logo.svg"
                    alt="Logo"
                    className="w-12 mx-auto mb-2"
                />
            </div>

            {/* Image gallery */}
            <div className="rounded-xl overflow-hidden mb-4">
                <img
                    src="https://picsum.photos/400"
                    alt="Main view"
                    className="w-full h-48 object-cover shadow-md"
                />
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
                <img
                    src="https://picsum.photos/200"
                    alt="Thumbnail"
                    className="rounded-xl object-cover h-20 w-full shadow-md"
                />
                <img
                    src="https://picsum.photos/200"
                    alt="Thumbnail"
                    className="rounded-xl object-cover h-20 w-full shadow-md"
                />
                <img
                    src="https://picsum.photos/200"
                    alt="Thumbnail"
                    className="rounded-xl object-cover h-20 w-full shadow-md"
                />
            </div>

            {/* Info section */}
            <h2 className="font-bold">{nego.reservation.room.hotel.name}, {nego.reservation.room.hotel.country}</h2>
            <p className="text-sm text-gray-500">{nego.reservation.room.roomType} - {nego.reservation.room.capacity} lits - 1 douche - {nego.reservation.room.amenities.join(", ")}</p>
            <div className="flex items-center text-sm mt-2 text-gray-600">
                {nego.reservation.room.hotel.address}, {nego.reservation.room.hotel.postalCode} {nego.reservation.room.hotel.city}
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="flex items-center mt-2">
                <img
                    src="https://picsum.photos/200"
                    alt="Hotel"
                    className="w-8 h-8 rounded-full mr-2"
                />
                <div className="flex flex-col">
                    <span className="text-sm font-medium">{nego.reservation.room.hotel.name}</span>
                    <span className="text-yellow-500 text-xs font-bold">{nego.reservation.room.hotel.starRating} ★</span>
                </div>
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Travel info */}
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Informations sur le voyage</span>
                        <div className="grid grid-rows-2 text-sm text-gray-600">
                            <p>
                                {nego.reservation.checkIn} - {nego.reservation.checkOut}
                            </p>
                            <p className="text-left">1 adulte</p>
                        </div>
                    </div>
                    <button className="btn btn-sm bg-[var(--color-main)] text-white rounded px-4 py-2">
                        Modifier
                    </button>
                </div>
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Cancellation */}
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Annulation gratuite</span>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Annulation gratuite sous 24h pour recevoir un remboursement complet
                        </p>
                    </div>
                    <button className="btn btn-sm bg-[var(--color-main)] text-white rounded px-4 py-2">
                        Détails
                    </button>
                </div>
            </div>

            {/* Pricing and CTA */}
            <div className="flex justify-between text-center mt-6">
                <div className="flex flex-col items-start">
                    <p className="text-sm font-semibold">Prix total</p>
                    <p className="text-sm">
                        {nego.reservation.totalPrice} €
                    </p>
                </div>
                <button
                    className="btn btn-lg bg-[var(--color-main)] w-1/2 rounded-md text-white font-medium"
                    onClick={() => setShowModal(true)}
                >
                    Négocier !
                </button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-center text-gray-500 mt-4 px-4">
                En appuyant sur « Négocier », vous acceptez les conditions d'utilisation ainsi que le règlement intérieur du logement ci-dessous.
            </p>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-xl font-bold mb-4">Négociation</h2>
                        <h3 className="text-md text-gray-600">Prix d'origine</h3>
                        <p className="text-lg font-semibold mb-4">
                            {nego.reservation.totalPrice} €
                        </p>
                        <form>
                            <label className="block mb-2">
                                Votre offre :
                            </label>

                            <div className="flex justify-between mb-2">
                                {[50, 100, 150, 200].map((value) => (
                                    <button
                                        key={value}
                                        type="button"
                                        className="btn btn-sm bg-[var(--color-main)] font-semibold text-white rounded px-2 py-1"
                                        onClick={() => {
                                            const input = document.querySelector('input[type="number"]');
                                            if (input) input.value = value;
                                        }}
                                    >
                                        {value} €
                                    </button>
                                ))}
                            </div>

                            <input
                                type="number"
                                className="border rounded w-full py-2 px-3 mt-2 mb-4"
                                placeholder="Entrez votre prix"
                            />
                            <div className="flex justify-between mb-4">
                                <button
                                    className="btn btn-sm bg-gray-300 rounded px-4 py-2"
                                    onClick={() => setShowModal(false)}
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-lg bg-[var(--color-main)] rounded-md text-white px-4 py-2"
                                >
                                    Négocier !
                                </button>
                            </div>
                        </form>

                        <p className="text-xs text-center text-gray-500 mt-4 px-4">
                            En appuyant sur « Négocier », vous acceptez les conditions d'utilisation ainsi que le règlement intérieur du logement ci-dessous.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
