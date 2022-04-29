import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import MapView, { Circle, Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";

import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import * as Location from "expo-location";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const setMapReady = () => {
    if (mapRef.current) {
      mapRef.current.fitToSuppliedMarkers(markers, {
        edgePadding: {
          top: 20,
          right: 100,
          bottom: 10,
          left: 100,
        },
        animated: true,
      });
    }
  };
  const [location, setLocation] = useState(null);
  const [drag, setDrag] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
      console.log(location);
    })();
  }, []);
  return (
    <MapView
      ref={mapRef}
      mapType="mutedStandard"
      style={tw`flex-1`}
      onMapReady={setMapReady}
      showsUserLocation={true}
      showsMyLocationButton
      followsUserLocation={true}
    >
      {
        // loop through markers array & render all markers
        markers.map((marker, i) => (
          <MapView.Marker coordinate={marker.latlng} key={i} />
        ))
      }
      {location?.coords.latitude && (
        <Marker
          coordinate={{
            latitude: location.coords?.latitude,
            longitude: location.coords?.longitude,
          }}
          title="Your Location"
          identifier="Your Location"
        />
      )}

      {location?.coords.latitude && (
        <Circle
          style={styles.circle}
          center={{
            latitude: location.coords?.latitude,
            longitude: location.coords?.longitude,
          }}
          radius={2500}
          strokeWidth={2}
          strokeColor="#3399ff"
          fillColor="rgba(255, 0, 0, 0.2)"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  circle: {
    opacity: 0.5,
  },
});
