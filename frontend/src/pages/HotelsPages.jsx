// src/pages/HotelPage.jsx
import React from 'react'
import HotelSearch from '../components/HotelSearch'

export default function HotelPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-6">Recherche d’hôtels</h1>
            <HotelSearch />
        </div>
    )
}
