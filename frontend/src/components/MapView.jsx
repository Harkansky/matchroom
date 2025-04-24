import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapView({ center = [48.8566, 2.3522], zoom = 13, markers = [] }) {
    // center par défaut : Paris
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: '100vh', width: '100%' }}
        >
            {/*
        TileLayer OSM gratuit : attribution obligatoire !
      */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;https://openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
            />

            {markers.map(({ id, position, popupText }) => (
                <Marker key={id} position={position}>
                    <Popup>{popupText}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
