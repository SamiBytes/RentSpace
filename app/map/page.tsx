"use client";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/app/map/map"), { ssr: false, loading: () => <p>Loading...</p> });

const MapPage = () => {
    return <div className="mt-5"><MapComponent /></div>;
};

export default MapPage;