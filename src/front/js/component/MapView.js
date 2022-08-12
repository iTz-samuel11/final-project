import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2FtdWVsMTFmYXJhY28iLCJhIjoiY2w2azEweXVpMHdxYTNibnd5MWpsbmZ2OCJ9.cjwsnVWotVL_nLAfuPc6Vw";

export const MapView = () => {
  const [hola, setHola] = useState("");
  const [viewport, setViewport] = useState({
    latitude: 10.2214038,
    longitude: -67.5561273,
    zoom: 8,
  });
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  return (
    <div style={{ height: "80vh" }}>
      <div ref={geocoderContainerRef} />
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          className="justify-content-center"
        />
      </MapGL>
    </div>
  );
};
