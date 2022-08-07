import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FtdWVsMTFmYXJhY28iLCJhIjoiY2w2aXB6d2x3MHFmazNkcWdqeTk1M2o0aSJ9.h375uchZCDZdNDEBXbL23g";

export const MapView = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-67.556104);
  const [lat, setLat] = useState(10.2197393);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // map.on("load", function () {
    //   // Add an image to use as a custom marker
    //   map.loadImage(
    //     "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
    //     function (error, image) {
    //       if (error) throw error;
    //       map.addImage("custom-marker", image);
    //       // Add a GeoJSON source with multiple points
    //       map.addSource("points", {
    //         type: "geojson",
    //         data: {
    //           type: "FeatureCollection",
    //         },
    //       });
    //       // Add a symbol layer
    //       map.addLayer({
    //         id: "points",
    //         type: "symbol",
    //         source: "points",
    //         layout: {
    //           "icon-image": "custom-marker",
    //           // get the title name from the source's "title" property
    //           "text-field": ["get", "title"],
    //           "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    //           "text-offset": [0, 1.25],
    //           "text-anchor": "top",
    //         },
    //       });
    //     }
    //   );
    // });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
