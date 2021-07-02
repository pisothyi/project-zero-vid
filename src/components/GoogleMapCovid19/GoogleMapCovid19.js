import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import "./GoogleMapCovid19.css";
import { Spinner } from "react-bootstrap";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function GoogleMapCovid19({ locationName, position, data, flag }) {
  const [mapRef, setMapRef] = useState(null);
  const [zoom, setZoom] = useState(6);
  const [markerMap, setMarkerMap] = useState({});
  const [center, setCenter] = useState({ lat: 11.562108, lng: 104.9282 });
  const [clickedLatLng, setClickedLatLng] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const markerLoadHandler = (marker, place) => {
    setCenter(position);
    setZoom(6);
    return setMarkerMap((prevState) => {
      return { ...prevState, [place]: marker };
    });
  };
  /*const myPlaces = [
    { id: "place1", pos: { lat: 39.09366509575983, lng: -94.58751660204751 } },
    { id: "place2", pos: { lat: 39.10894664788252, lng: -94.57926449532226 } },
    { id: "place3", pos: { lat: 39.07602397235644, lng: -94.5184089401211 } },
  ];*/

  const fitBounds = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    //bounds.extend(center);
    map.fitBounds(bounds);
  };

  const loadHandler = (map) => {
    // Store a reference to the google map instance in state
    setMapRef(map);
    // Fit map bounds to contain all markers
    //fitBounds(map);
  };

  const markerClickHandler = (event, place) => {
    // Remember which place was clicked
    setSelectedPlace(place);

    // Required so clicking a 2nd marker works as expected
    if (infoOpen) {
      setInfoOpen(false);
    }

    setInfoOpen(true);

    // if you want to center the selected Marker
    //setCenter(position);
    setZoom(6);
  };

  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });

  const onUnmount = React.useCallback(function callback(map) {
    setMapRef(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      onLoad={loadHandler}
      zoom={zoom}
      mapContainerStyle={containerStyle}
      center={center}
      onClick={(e) => setClickedLatLng(e.latLng.toJSON())}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
      <Marker
        key={locationName}
        position={position}
        onLoad={(marker) => markerLoadHandler(marker, locationName)}
        onClick={(event) => markerClickHandler(event, locationName)}
        animation={window.google.maps.Animation.DROP}
        // Not required, but if you want a custom icon:
      />

      {infoOpen && selectedPlace && (
        <InfoWindow
          anchor={markerMap[selectedPlace]}
          onCloseClick={() => setInfoOpen(false)}
        >
          <div className="info-window-container">
            <img alt="flag" src={flag} className="flag" />
            <h3>{selectedPlace}</h3>

            <div>
              <p>
                <b>Total Cases:</b> {data.total}
              </p>
              <p>
                <b>Active Cases:</b> {data.active}
              </p>
              <p>
                <b>Recovered:</b> {data.recovered}
              </p>
              <p>
                <b>Total Deaths:</b> {data.death}
              </p>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <Spinner animation="border" variant="primary" />
  );
}

export default GoogleMapCovid19;
