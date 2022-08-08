import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

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
  });

  //   map.addControl(
  //     new MapboxGeocoder({
  //       accessToken: mapboxgl.accessToken,
  //       mapboxgl: mapboxgl,
  //     })
  //   );
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

// import "mapbox-gl/dist/mapbox-gl.css";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import React, { useState, useRef, useCallback } from "react";
// import MapGL from "react-map-gl";
// // import Geocoder from "react-geocoder";
// import Geocoder from "react-map-gl-geocoder";

// // Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
// const MAPBOX_TOKEN =
//   "pk.eyJ1Ijoic2FtdWVsMTFmYXJhY28iLCJhIjoiY2w2azEweXVpMHdxYTNibnd5MWpsbmZ2OCJ9.cjwsnVWotVL_nLAfuPc6Vw";

// export const MapView = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8,
//   });
//   const geocoderContainerRef = useRef();
//   const mapRef = useRef();
//   const handleViewportChange = useCallback(
//     (newViewport) => setViewport(newViewport),
//     []
//   );

//   return (
//     <div style={{ height: "100vh" }}>
//       <div
//         ref={geocoderContainerRef}
//         style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
//       />
//       <MapGL
//         ref={mapRef}
//         {...viewport}
//         width="100%"
//         height="100%"
//         onViewportChange={handleViewportChange}
//         mapboxApiAccessToken={MAPBOX_TOKEN}
//       >
//         <Geocoder
//           mapRef={mapRef}
//           containerRef={geocoderContainerRef}
//           onViewportChange={handleViewportChange}
//           mapboxApiAccessToken={MAPBOX_TOKEN}
//           position="top-left"
//         />
//       </MapGL>
//     </div>
//   );
// };
