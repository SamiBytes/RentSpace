"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./map"), { ssr: false });

const MapPage = () => {
    return <MapComponent />;
};

export default MapPage;