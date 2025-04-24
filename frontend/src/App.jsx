// src/App.jsx
import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import MapView from "./components/MapView"
import PlanningPage from "./pages/PlanningPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import HotelPage from "./pages/HotelsPages.jsx"
import SearchPage from "./components/SearchBar.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"

function App() {
    const hotelMarkers = [
        { id: 1, position: [48.8566, 2.3522], popupText: "Hôtel 1 à Paris" },
        {
            id: 2,
            position: [48.8606, 2.3376],
            popupText: "Hôtel 2, près du Louvre",
        },
    ]

    return (
        <BrowserRouter>
            <div className="font-neue-montreal ">
                <Navbar />
                <div className=" container mx-auto max-w-[1200px] px-4">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route
                            path="/test-map"
                            element={
                                <div>
                                    <h1 className="text-center text-2xl my-4">Carte OpenStreetMap avec Leaflet</h1>
                                    <MapView center={[48.8566, 2.3522]} zoom={12} markers={hotelMarkers} />
                                </div>
                            }
                        />

                        <Route path="/planning" element={<PlanningPage />} />
                        <Route path="/hotel" element={<HotelPage />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
