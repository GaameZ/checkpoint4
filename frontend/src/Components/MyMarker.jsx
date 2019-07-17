import React from "react";
import { Marker, Popup } from "react-leaflet";

const MyMarker = props => {
  const position = [props.show.lat, props.show.lon];
  return (
    <div>
      <Marker position={position}>
        <Popup>
          <p>Date: {props.show.date.split("T")[0]}</p>
          <p>Ville: {props.show.ville}</p>
        </Popup>
      </Marker>
    </div>
  );
};

export default MyMarker;
