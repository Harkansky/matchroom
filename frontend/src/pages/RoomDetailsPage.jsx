// src/pages/RoomDetails.jsx
import React, { useEffect, useRef } from "react"

export default function RoomDetailsPage() {
    const dataImg = [
        { id: 1, src: "hotel1.jpg", alt: "Pièce 1" },
        { id: 2, src: "login-illustration.jpg", alt: "Pièce 2" },
        { id: 3, src: "register-illustration.jpg", alt: "Pièce 3" },
    ]

    const modalRef = useRef(null)

    const [proposedPrice, setProposedPrice] = React.useState(0.0)
    const [roomPrice, setRoomPrice] = React.useState(156.0)
    const [peopleAmount, setPeopleAmount] = React.useState(1)
    const [checkIn, setCheckIn] = React.useState("28-04-2025")
    const [checkOut, setCheckOut] = React.useState("29-04-2025")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            userId: 11,
            roomId: 1,
            checkIn: checkIn,
            checkOut: checkOut,
            totalPrice: proposedPrice.toString(),
            status: "pending",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }

        try {
            const response = await fetch("/api/reservations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const result = await response.json()

            modalRef.current.close()

            console.log("Reservation created successfully:", result)
        } catch (error) {
            console.error("Error creating reservation:", error)
        }
    }

    return (
        <div className="w-full">
            <div className="mb-8 w-full bg-[url(/img/hotel1.jpg)] bg-cover bg-[0%_70%] min-h-[300px] md:min-h-[600px] rounded-lg shadow-md/30 mt-4 relative">
                <div className="absolute bottom-4 left-6 text-white">
                    <h1 className="font-bold text-2xl sm:text-5xl mt-6 text-white mb-3">Hotel Jean Claude</h1>
                    <div className="flex gap-2 mb-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                        </svg>

                        <h3 className="">Paris 16eme</h3>
                    </div>
                    <div className="flex gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                        </svg>

                        <h3 className="">4.8 (465 avis)</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-none place-content-between font-bold">
                <h3 className="text-2xl text-neutral-gray">Galerie photos</h3>
                <div className="flex flex-nowrap gap-3">
                    <span>Tout voir</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>

            <div
                className="flex flex-nowrap overflow-x-scroll scroll-smooth ml-3 mt-4"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                <div className="flex flex-col">
                    <div className="flex gap-12 flex-col-reverse md:flex-row">
                        <div className="flex w-full flex-col md:w-2/3">
                            <div className="flex gap-3 ">
                                {dataImg.map((img) => (
                                    <img
                                        key={img.id}
                                        src={`/img/${img.src}`}
                                        alt={img.alt}
                                        className="rounded-lg shadow-lg w-1/3 aspect-square object-cover"
                                    />
                                ))}
                            </div>
                            <hr className="mt-12 mb-8 text-gray-200 " />
                            <h3 className="font-bold text-2xl mb-6">Equipements proposé</h3>
                            <div className="ml-3 text-gray-700 mb-3">
                                <div className="flex gap-3 mb-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
                                        />
                                    </svg>

                                    <span>Wi-fi</span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                        />
                                    </svg>

                                    <span>Room service</span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                                        />
                                    </svg>

                                    <span>Piscine</span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                                        />
                                    </svg>

                                    <span>Petit déjeuner</span>
                                </div>
                            </div>
                            <div className="cursor-pointer text-[#7F3A65] w-full m-auto text-center text-[11px] border border-[#7F3A65] rounded-xl h-[32.174560546875] py-2 font-semibold">
                                Voir tout les équipements
                            </div>

                            <div>
                                <hr className="mt-12 mb-8 text-gray-200 " />
                                <h3 className="font-bold text-2xl mb-6">Description</h3>

                                <p className="text-gray-700 text-[15px] mb-6">
                                    Magnifique maison de 4 pièces nichée au cœur du très chic 16e arrondissement de
                                    Paris, alliant charme classique et confort moderne. Elle dispose de vastes espaces
                                    lumineux, soigneusement décorés avec goût et élégance. Parfaite pour accueillir
                                    familles ou groupes d’amis souhaitant découvrir la capitale dans un cadre paisible
                                    et raffiné. Vous y trouverez tout le nécessaire pour un séjour agréable : cuisine
                                    équipée, salon convivial, chambres douillettes et salle de bain moderne. À quelques
                                    pas des meilleurs restaurants, musées, boutiques de luxe et du Bois de Boulogne.
                                    Très appréciée des voyageurs, elle affiche une excellente note de 4.8 sur 465 avis.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full md:w-1/3">
                            <div className="w-full border border-gray-200 rounded-lg p-4 flex self-start sticky top-0 overflow-auto">
                                <form className="flex flex-col gap-6 text-black w-full">
                                    <div className="flex flex-col gap-2 justify-center w-full">
                                        <h3 className="text-2xl flex gap-3 items-center">
                                            <span>156€/ nuit</span>
                                            <span className="text-sm text-secondary-yellow">All inclusive</span>
                                        </h3>
                                        <div className="w-full flex flex-col gap-1">
                                            <label className="text-neutral-gray">Nombre de personnes</label>
                                            <input
                                                type="number"
                                                placeholder="Nombre de personnes"
                                                value={peopleAmount}
                                                onChange={(e) => setPeopleAmount(e.target.value)}
                                                min={1}
                                                className="input lg:input-lg lg:text-base rounded-lg w-full"
                                            />
                                        </div>
                                        <div className="w-full  flex flex-col lg:flex-row gap-2">
                                            <div className="flex flex-col w-full">
                                                <label className="text-neutral-gray">Arrivée</label>
                                                <input
                                                    type="date"
                                                    className="input lg:input-lg lg:text-base rounded-lg w-full"
                                                    onChange={(e) => setCheckIn(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex flex-col w-full">
                                                <label className="text-neutral-gray w-full">Départ</label>

                                                <input
                                                    type="date"
                                                    className="input lg:input-lg lg:text-base rounded-lg w-full"
                                                    onChange={(e) => setCheckOut(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="bg-main border-main w-full rounded-lg shadow-xl text-white btn md:btn-lg md:text-base gap-3"
                                            onClick={() => document.getElementById("offer-modal").showModal()}
                                        >
                                            <span>Négocier un prix</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="22"
                                                viewBox="0 0 20 22"
                                                fill="none"
                                            >
                                                <g clip-path="url(#clip0_38_2215)">
                                                    <path
                                                        d="M6.3124 5.29968C7.68931 5.29968 8.80552 4.19018 8.80552 2.82153C8.80552 1.45289 7.68931 0.343384 6.3124 0.343384C4.93548 0.343384 3.81927 1.45289 3.81927 2.82153C3.81927 4.19018 4.93548 5.29968 6.3124 5.29968Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M13.5543 5.29968C14.9313 5.29968 16.0475 4.19018 16.0475 2.82153C16.0475 1.45289 14.9313 0.343384 13.5543 0.343384C12.1774 0.343384 11.0612 1.45289 11.0612 2.82153C11.0612 4.19018 12.1774 5.29968 13.5543 5.29968Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M19.1924 21.3353L17.2122 21.1216C17.6176 17.3965 17.5997 14.4931 17.1584 12.4937C16.9367 11.4895 16.4842 10.1981 15.5927 9.74835C14.0695 8.97796 11.5114 10.8082 10.7364 11.5095L10.1316 12.0573L9.473 11.5741C7.90052 10.4141 5.72771 9.20062 4.30755 10.0066C3.10019 10.6924 2.30499 12.8321 2.06755 16.0294C1.87267 18.6657 2.12579 21.0993 2.12803 21.1238L0.147873 21.3331C0.136673 21.2284 -0.125407 18.7236 0.0806727 15.9137C0.374113 11.9103 1.46275 9.34534 3.31971 8.28996C5.07363 7.29469 7.32483 7.71328 10.024 9.5346C10.425 9.22956 10.9917 8.83324 11.648 8.48144C13.496 7.4884 15.1693 7.31696 16.4932 7.98269C19.1431 9.3164 20.0279 13.6849 19.1946 21.3353H19.1924Z"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M11.9193 20.0907C11.198 20.0907 10.5125 19.8413 9.96597 19.4071C9.42165 19.8435 8.73397 20.0907 8.01269 20.0907C6.29461 20.0907 4.89685 18.7013 4.89685 16.9936C4.89685 16.3234 5.10965 15.6843 5.51061 15.1477L5.50165 15.1388L9.96373 10.7036L13.8412 14.5577C14.054 14.7247 14.2444 14.9184 14.4079 15.1344L14.4236 15.1567C14.8223 15.691 15.0306 16.3278 15.0306 16.9936C15.0306 18.7013 13.6329 20.0907 11.9148 20.0907H11.9193ZM9.96821 16.2788L10.7365 17.6482C10.9762 18.0757 11.4309 18.3406 11.9193 18.3406C12.6652 18.3406 13.2745 17.7372 13.2745 16.9936C13.2745 16.6996 13.1804 16.4213 13.0034 16.1853L12.9989 16.1809C12.9228 16.0807 12.8332 15.9916 12.7324 15.9159L12.6831 15.8781L9.96597 13.1772L6.90389 16.2209C6.74485 16.448 6.65973 16.713 6.65973 16.9913C6.65973 17.7328 7.26677 18.3384 8.01493 18.3384C8.50549 18.3384 8.95797 18.0734 9.19765 17.6459L9.96597 16.2766L9.96821 16.2788Z"
                                                        fill="white"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_38_2215">
                                                        <rect
                                                            width="19.4925"
                                                            height="20.9919"
                                                            fill="white"
                                                            transform="translate(0 0.343384)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="w-full h-[6%] max-h-[7rem] sticky bottom-0 flex flex-nowrap items-center justify-center gap-2 bg-white md:hidden"
                style={{
                    boxShadow: "0 -5px 5px 3px rgba(0,0,0,0.08), 0 -4px 6px -4px rgba(0,0,0,0.1)",
                }}
            >
                <div className="flex flex-col items-center justify-center w-[40%] ">
                    <div className="text-[15.41px] font-bold text-[#484C52]">156€/ nuit</div>
                    <div className="text-[8.48px]">8 - 13 mai</div>
                </div>
                <button
                    className="cursor-pointer w-[60%] text-[11px] bg-amber-700 h-8 rounded-lg mr-5 text-white font-semibold"
                    style={{
                        background: "linear-gradient(to right, #7F3A65, #E569B6)",
                    }}
                    onClick={() => document.getElementById("offer-modal").showModal()}
                >
                    Reserver
                </button>
            </div>

            <dialog id="offer-modal" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <div className="flex items-center flex-col">
                        <h3 className="mb-6 text-secondary-yellow">Prix public conseillé : 156€ / nuit</h3>
                        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
                            <h3 className="font-bold text-xl mb-1">Votre offre</h3>
                            <div class="form-control w-full max-w-xs">
                                <label class="font-semibold text-2xl input input-lg rounded-lg input-bordered w-full flex items-center gap-2">
                                    €
                                    <input
                                        className="font-semibold text-2xl"
                                        type="number"
                                        placeholder="0.00"
                                        step="0.01"
                                        min="0"
                                        class="grow"
                                        onChange={(e) => setProposedPrice(e.target.value)}
                                    />
                                </label>
                            </div>
                            <button type="submit" className="btn btn-lg w-full bg-main text-white mt-3 rounded-lg">
                                Envoyer
                            </button>
                        </form>
                        <form method="dialog" className="w-full">
                            <button className="btn btn-lg rounded-lg  w-full mt-2">Annuler</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
