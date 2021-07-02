import React, { useState, useEffect } from "react";
import "./GoogleMapPrevLocation.css";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import { Spinner } from "react-bootstrap";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const GoogleMapPrevLocation = ({
  locationsData,
  selectedItem,
  itemClickedEvent,
}) => {
  const [mapRef, setMapRef] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerMap, setMarkerMap] = useState({});
  const [center, setCenter] = useState({ lat: 11.562108, lng: 104.9282 });
  const [zoom, setZoom] = useState(6);
  const [clickedLatLng, setClickedLatLng] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    if (mapRef !== null && selectedItem !== null) {
      markerClickHandler(itemClickedEvent, selectedItem);
    }
  }, [mapRef, selectedItem, itemClickedEvent]);

  const fitBounds = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    if (locationsData.length !== 0) {
      locationsData.map((location) => {
        bounds.extend(location.data.position || center);
        return location.data.id;
      });
    } else {
      bounds.extend(center);
    }

    if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
      var extendPoint = new window.google.maps.LatLng(
        bounds.getNorthEast().lat() + 0.02,
        bounds.getNorthEast().lng() + 0.01
      );
      bounds.extend(extendPoint);
    }

    map.fitBounds(bounds);
  };

  const loadHandler = (map) => {
    // Store a reference to the google map instance in state
    setMapRef(map);
    // Fit map bounds to contain all markers
    fitBounds(map);
  };

  // We have to create a mapping of our places to actual Marker objects
  const markerLoadHandler = (marker, place) => {
    fitBounds(mapRef);
    return setMarkerMap((prevState) => {
      return { ...prevState, [place.data.id]: marker };
    });
  };

  const markerClickHandler = (event, place) => {
    // Remember which place was clicked
    setSelectedPlace(place);

    //Pan To Location
    mapRef.panTo({
      lat: place.data.position.lat,
      lng: place.data.position.lng,
    });

    // Required so clicking a 2nd marker works as expected
    if (infoOpen) {
      setInfoOpen(false);
    }

    setInfoOpen(true);

    // If you want to zoom in a little on marker click
    if (zoom < 13) {
      setZoom(13);
    }

    // if you want to center the selected Marker
    //setCenter(place.data.position);
  };

  const convertDateToString = (inputDate) => {
    return new Date(inputDate * 1000).toLocaleString("en-US", {
      weekday: "short", // long, short, narrow
      day: "numeric", // numeric, 2-digit
      year: "numeric", // numeric, 2-digit
      month: "long", // numeric, 2-digit, long, short, narrow
      hour: "numeric", // numeric, 2-digit
      minute: "numeric", // numeric, 2-digit
      second: "numeric", // numeric, 2-digit
    });
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
      // Save the user's map click position
      onClick={(e) => setClickedLatLng(e.latLng.toJSON())}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
      {locationsData.length !== 0 ? (
        locationsData.map((location) => (
          <Marker
            key={location.id}
            position={location.data.position}
            onLoad={(marker) => markerLoadHandler(marker, location)}
            onClick={(event) => markerClickHandler(event, location)}
            animation={window.google.maps.Animation.DROP}
          />
        ))
      ) : (
        <></>
      )}

      {infoOpen && selectedPlace && (
        <InfoWindow
          anchor={markerMap[selectedPlace.data.id]}
          onCloseClick={() => setInfoOpen(false)}
        >
          <div>
            <h4>{selectedPlace.data.locationName}</h4>
            <div>{convertDateToString(selectedPlace.data.timestamp)}</div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <Spinner animation="border" variant="primary" />
  );
};

export default GoogleMapPrevLocation;
