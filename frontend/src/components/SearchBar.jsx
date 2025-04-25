import React, { useState } from 'react';
import { fetchRooms } from '../api/rooms';

const STOP_WORDS = [
    'le','la','les','de','des','du','un','une','et','avec','pour','en',
    'au','aux','à','dans','sur','sous','chez','par','que','qui'
];

export default function SearchBar({ onResults }) {
    const [input, setInput] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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
            const availableOnly = data.filter(room => room.available === true);

            onResults(availableOnly);
        } catch (err) {
            console.error(err);
            alert('Erreur pendant la recherche : ' + err.message);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex flex-col gap-6 text-black">
            <div className="flex flex-col md:flex-row gap-2 justify-center">
                <div className="w-full md:w-1/4 flex gap-1">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Où allez-vous ?"
                        className="input md:input-lg md:text-base rounded-lg w-full"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2 md:gap-1">
                    <input
                        type="date"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                        className="input md:input-lg md:text-base rounded-lg w-full md:w-1/2"
                    />
                    <input
                        type="date"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                        className="input md:input-lg md:text-base rounded-lg w-full md:w-1/2"
                    />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="bg-main border-main rounded-lg shadow-xl text-white btn md:btn-lg md:text-base"
                >
                    <span>Trouver un match</span>
                </button>
            </div>
        </form>
    );
}
