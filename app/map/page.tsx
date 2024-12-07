"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet"; // Import Leaflet to create the custom icon
import "leaflet/dist/leaflet.css";
import axios from "axios";

// Function to focus the map on the first marker
const FocusMap = ({ latitude, longitude }: { latitude: number, longitude: number }) => {
    const map = useMap(); // Access the map instance

    useEffect(() => {
        // Focus the map on the first marker
        if (latitude && longitude) {
            map.flyTo([latitude, longitude], 8); // Fly to the position of the first marker
        }
    }, [latitude, longitude, map]);

    return null;
};

const MapComponent = () => {
    // Create a custom icon for the marker
    const customIcon = new L.Icon({
        iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-1024.png",
        iconSize: [50, 50], // Size of the icon
        iconAnchor: [16, 32], // Anchor point for the icon (adjust to fit)
        popupAnchor: [0, -32], // Anchor point for the popup
    });

    const [spaces, setSpaces] = useState<any>([]);

    useEffect(() => {
        // Fetch data from API
        axios
            .get(`${process.env.NEXT_PUBLIC_ROOT_URL}/users/public-rent-space/`)
            .then((res) => {
                setSpaces(res.data);
                console.log(res.data);
            });
    }, []);

    return (
        <div
            className="mt-5"
            style={{
                display: 'flex',         // Flexbox to center content
                justifyContent: 'center', // Center horizontally
                alignItems: 'center',    // Center vertically
                height: '100vh',         // Full viewport height for vertical centering
                width: '100%',           // Full width
            }}
        >
            <div style={{ height: '800px', width: '80%' }}>
                <MapContainer
                    center={[52.1326, 5.2913]}
                    zoom={2}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {
                        spaces.map((item: any) => (
                            <Marker position={[item.latitude, item.longitude]} icon={customIcon} key={item.id}>
                                <Popup>
                                    {item.name}
                                </Popup>
                            </Marker>
                        ))
                    }
                    {/* Focus the map on the first marker */}
                    {spaces.length > 0 && <FocusMap latitude={spaces[0].latitude} longitude={spaces[0].longitude} />}
                </MapContainer>
            </div>
        </div>
    );
};

export default MapComponent;