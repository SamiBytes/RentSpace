"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ lat, lon }: { lat: number, lon: number }) => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lon]}>
          <Popup>
            A marker at London.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;