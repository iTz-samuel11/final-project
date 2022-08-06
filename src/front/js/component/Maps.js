import React, { useContext, useEffect } from "react";
// import "./my-map.scss";
import maplibre from "maplibre-gl";
import { Context } from "../store/appContext";
// import "~maplibre-gl/dist/maplibre-gl.css";

export const Maps = () => {
  const { store, actions } = useContext(Context);
  let mapContainer;
  let lat = store.latitude;
  let long = store.longitude;

  useEffect(() => {
    const myAPIKey = "47704541d90841caa48dd47ad6001bbd";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lng: -67,
      lat: 11,
      zoom: 4,
    };

    const map = new maplibre.Map({
      container: mapContainer,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });
  }, [mapContainer]);

  return (
    <div className="map-container" ref={(el) => (mapContainer = el)}></div>
  );
};
