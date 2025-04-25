import React, { useState } from "react"
import { fetchRooms } from "../api/rooms"

const STOP_WORDS = [
    "le",
    "la",
    "les",
    "de",
    "des",
    "du",
    "un",
    "une",
    "et",
    "avec",
    "pour",
    "en",
    "au",
    "aux",
    "à",
    "dans",
    "sur",
    "sous",
    "chez",
    "par",
    "que",
    "qui",
]

export default function SearchBar({ onResults }) {
    const [input, setInput] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const handleSearch = async (e) => {
        e.preventDefault()

        const terms = input
            .toLowerCase()
            .split(/\s+/)
            .filter((w) => w && !STOP_WORDS.includes(w))

        try {
            const data = await fetchRooms({
                keywords: terms,
                startDate,
                endDate,
            })
            const availableOnly = data.filter((room) => room.available === true)

            onResults(availableOnly)
        } catch (err) {
            console.error(err)
            alert("Erreur pendant la recherche : " + err.message)
        }
    }

    return (
        <form onSubmit={handleSearch} className="flex flex-col gap-6 text-black">
            <div className="flex flex-col md:flex-row gap-2 justify-center">
                <div className="w-full md:w-1/4 flex gap-1">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Où allez-vous ?"
                        className="input md:input-lg md:text-base rounded-lg w-full"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2 md:gap-1">
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="input md:input-lg md:text-base rounded-lg w-full md:w-1/2"
                    />
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="input md:input-lg md:text-base rounded-lg w-full md:w-1/2"
                    />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-main border-main rounded-lg shadow-xl text-white btn md:btn-lg md:text-base gap-3"
                >
                    <span>Trouver un match</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
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
                                <rect width="19.4925" height="20.9919" fill="white" transform="translate(0 0.343384)" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </form>
    )
}
