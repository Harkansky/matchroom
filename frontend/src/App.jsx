// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MapView from "./components/MapView";
import PlanningPage from "./pages/PlanningPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import HotelPage from "./pages/HotelsPages.jsx";

function App() {
  const hotelMarkers = [
    { id: 1, position: [48.8566, 2.3522], popupText: "Hôtel 1 à Paris" },
    {
      id: 2,
      position: [48.8606, 2.3376],
      popupText: "Hôtel 2, près du Louvre",
    },
  ];

  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-100 flex justify-between space-x-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-blue-600 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="34"
              viewBox="0 0 31 34"
              fill="none"
            >
              <g clip-path="url(#clip0_40_527)">
                <path
                  d="M10.0388 8.13675C12.2286 8.13675 14.0038 6.36158 14.0038 4.1718C14.0038 1.98202 12.2286 0.206848 10.0388 0.206848C7.84906 0.206848 6.07389 1.98202 6.07389 4.1718C6.07389 6.36158 7.84906 8.13675 10.0388 8.13675Z"
                  fill="white"
                />
                <path
                  d="M21.5561 8.13675C23.7459 8.13675 25.521 6.36158 25.521 4.1718C25.521 1.98202 23.7459 0.206848 21.5561 0.206848C19.3663 0.206848 17.5911 1.98202 17.5911 4.1718C17.5911 6.36158 19.3663 8.13675 21.5561 8.13675Z"
                  fill="white"
                />
                <path
                  d="M30.5226 33.7931L27.3735 33.4512C28.0183 27.4913 27.9898 22.8459 27.288 19.6469C26.9353 18.0402 26.2157 15.974 24.7979 15.2544C22.3754 14.0218 18.3072 16.9501 17.0746 18.0723L16.1127 18.9486L15.0654 18.1756C12.5646 16.3196 9.10906 14.3781 6.85049 15.6677C4.93036 16.7649 3.66571 20.1883 3.28809 25.304C2.97817 29.5218 3.38072 33.4155 3.38428 33.4547L0.235118 33.7896C0.217306 33.6222 -0.199495 29.6145 0.128246 25.1187C0.59492 18.7135 2.32625 14.6096 5.27948 12.9211C8.06883 11.3287 11.649 11.9984 15.9417 14.9124C16.5794 14.4244 17.4807 13.7903 18.5245 13.2274C21.4635 11.6386 24.1246 11.3643 26.2299 12.4294C30.4443 14.5633 31.8514 21.5527 30.5262 33.7931H30.5226Z"
                  fill="white"
                />
                <path
                  d="M18.9555 31.8018C17.8084 31.8018 16.7183 31.4028 15.8491 30.7081C14.9835 31.4063 13.8898 31.8018 12.7427 31.8018C10.0103 31.8018 7.78741 29.5788 7.78741 26.8465C7.78741 25.7742 8.12583 24.7518 8.7635 23.8932L8.74925 23.879L15.8456 16.7827L22.0121 22.9492C22.3505 23.2164 22.6533 23.5263 22.9134 23.8719L22.9383 23.9075C23.5724 24.7625 23.9037 25.7813 23.9037 26.8465C23.9037 29.5788 21.6808 31.8018 18.9484 31.8018H18.9555ZM15.8527 25.7029L17.0746 27.8938C17.4558 28.5778 18.1789 29.0017 18.9555 29.0017C20.1418 29.0017 21.1108 28.0363 21.1108 26.8465C21.1108 26.3762 20.9612 25.9309 20.6797 25.5533L20.6726 25.5462C20.5515 25.3859 20.409 25.2434 20.2487 25.1223L20.1703 25.0617L15.8491 20.7405L10.9793 25.6103C10.7264 25.9737 10.591 26.3976 10.591 26.8429C10.591 28.0292 11.5564 28.9982 12.7463 28.9982C13.5264 28.9982 14.246 28.5742 14.6272 27.8903L15.8491 25.6994L15.8527 25.7029Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_40_527">
                  <rect
                    width="31"
                    height="33.5863"
                    fill="white"
                    transform="translate(0 0.206848)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to="/hotels">Hôtels</Link>
          <Link to="/campings">Campings</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/register" className="btn btn-ghost rounded-lg">
            Inscription
          </Link>
          <Link to="/login" className="btn rounded-lg">
            Connexion
          </Link>
        </div>
      </nav>
      <div className=" container mx-auto max-w-[1200px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/test-map"
            element={
              <div>
                <h1 className="text-center text-2xl my-4">
                  Carte OpenStreetMap avec Leaflet
                </h1>
                <MapView
                  center={[48.8566, 2.3522]}
                  zoom={12}
                  markers={hotelMarkers}
                />
              </div>
            }
          />

          <Route path="/planning" element={<PlanningPage />} />
          <Route path="/hotel" element={<HotelPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
