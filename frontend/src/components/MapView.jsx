import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";

export default function MapView() {
  const navigate = useNavigate();

  const center = [48.8566, 2.3522];
  const zoom = 13;
  const markers = [
    {
      position: [48.8686, 2.3285],
      popupText: "Hôtel Ritz Paris",
      price: 200,
    },
    { position: [48.8656, 2.3282], popupText: "Le Meurice", price: 180 },
    {
      position: [48.868, 2.3212],
      popupText: "Hôtel de Crillon",
      price: 190,
    },
    {
      position: [48.8634, 2.2935],
      popupText: "Shangri-La Hotel Paris",
      price: 170,
    },
    {
      position: [48.8704, 2.293],
      popupText: "The Peninsula Paris",
      price: 160,
    },
    {
      position: [48.8696, 2.3005],
      popupText: "Four Seasons Hotel George V",
      price: 210,
    },
    {
      position: [48.8665, 2.3282],
      popupText: "Mandarin Oriental Paris",
      price: 195,
    },
    {
      position: [48.8516, 2.3251],
      popupText: "Hotel Jean Claude",
      price: 156,
    },
    {
      position: [48.8662, 2.3032],
      popupText: "Hôtel Plaza Athénée",
      price: 205,
    },
    {
      position: [48.8682, 2.3301],
      popupText: "Park Hyatt Paris-Vendôme",
      price: 185,
    },
  ];

  // center par défaut : Paris
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100vh", width: "100%" }}
    >
      {/*
        TileLayer OSM gratuit : attribution obligatoire !
      */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {markers.map(({ id, position, popupText, price }) => (
        <Marker key={id} position={position}>
          <Popup>
            <div
              className="cursor-pointer flex flex-col gap-1"
              onClick={() => navigate("hotels")}
            >
              <span className="font-semibold ">{popupText}</span>
              <span className="font-medium text-secondary-yellow">
                Prix conseillé :{" "}
                <span className="font-bold">{price}€/ nuit</span>
              </span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
