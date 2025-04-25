// src/pages/MainPage.jsx
import React, { useState } from "react"
import PlanningPage from "./PlanningPage"
import SearchPage from "../components/SearchBar"
import HotelPage from "./HotelsPages"
import logo from "../../public/img/logo_2.png"

export default function MainPage() {
    const [activePage, setActivePage] = useState("planning")

    const renderContent = () => {
        switch (activePage) {
            case "planning":
                return <PlanningPage />
            case "search":
                return <SearchPage />
            default:
                return null
        }
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* SIDEBAR */}
            <aside className="w-20 md:w-64 bg-white shadow-lg flex flex-col h-screen sticky top-0">
                {/* Logo */}
                <div className="flex items-center justify-center p-4 h-32">
                    <img src={logo} alt="Logo" className="w-16 md:w-24" />
                </div>


                {/* Boutons */}
                <div className="flex flex-col flex-1">
                    <SidebarButton
                        label="Planning"
                        img="/img/planning.svg"
                        imgActive="/img/planning-white.svg"
                        active={activePage === "planning"}
                        onClick={() => setActivePage("planning")}
                    />
                    <SidebarButton
                        label="Négociation"
                        img="/img/search.svg"
                        imgActive="/img/search-white.svg"
                        active={activePage === "search"}
                        onClick={() => setActivePage("search")}
                    />
                    <SidebarButton
                        label="Parmamètres"
                        img="/img/hotel.svg"
                        imgActive="/img/hotel-white.svg"
                        active={activePage === "hotels"}
                        onClick={() => setActivePage("hotels")}
                    />
                </div>

                {/* Footer */}
                <div className="hidden md:block text-center text-xs text-gray-400 mb-4">
                    ©2025 MATCHROOM ALL RIGHT
                </div>
            </aside>

            {/* CONTENU */}
            <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
        </div>
    )
}

function SidebarButton({ label, img, imgActive, active, onClick }) {
    const iconSrc = active ? imgActive : img

    return (
        <button
            onClick={onClick}
            className={`h-1/3 w-full flex flex-col items-center justify-center px-4 py-6 transition text-left ${
                active ? "bg-main text-white" : "text-main hover:bg-main/10"
            }`}
        >
            <img src={iconSrc} alt={label} className="w-10 h-10 mb-2" />
            <span className="text-sm md:text-base font-medium">{label}</span>
        </button>
    )
}
