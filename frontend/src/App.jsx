import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import MapView from "./components/MapView.jsx"
import PlanningPage from "./pages/PlanningPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import RoomDetails from "./pages/RoomDetails.jsx"
import HotelPage from "./pages/HotelsPages.jsx"
import SearchPage from "./components/SearchBar.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import BackOffice from "./pages/BackOfficePage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import NegoPage from './pages/NegoPage.jsx'
import UsersPage from "./pages/UsersPage.jsx"

function AppRoutes() {
    const location = useLocation()
    const hideNavbarOnRoutes = ["/backoffice"] // Tu peux ajouter d'autres routes ici
    const showNavbar = !hideNavbarOnRoutes.includes(location.pathname)

    const hotelMarkers = [
        { id: 1, position: [48.8566, 2.3522], popupText: "Hôtel 1 à Paris" },
        { id: 2, position: [48.8606, 2.3376], popupText: "Hôtel 2, près du Louvre" },
    ]

    return (
        <div className="font-neue-montreal">
            {showNavbar && <Navbar />}

            <div className="container mx-auto max-w-[1200px] px-4">
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
                    <Route path="/nego/:id" element={<NegoPage />} />
                    <Route path="/users" element={<UsersPage />} />

                    <Route path="/planning" element={<PlanningPage />} />
                    <Route path="/details" element={<RoomDetails />} />
                    <Route path="/hotel" element={<HotelPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/profil" element={<ProfilePage />} />
                    <Route path="/nego/:id" element={<NegoPage />} />
                </Routes>
            </div>
            <Routes>
                <Route path="/backoffice" element={<BackOffice />} />
            </Routes>
        </div>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}
