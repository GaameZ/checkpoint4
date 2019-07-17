import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import "./Map.css";
import Axios from "axios";
import MyMarker from "./MyMarker";
const osrTiles = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
const osrAttr =
  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

const ShowMap = () => {
  const [state, setState] = useState({
    lat: 50.633333,
    lng: 3.066667,
    shows: []
  });
  let leafletMap;
  useEffect(() => {
    leafletMap = leafletMap.leafletElement;
  });
  useEffect(() => {
    Axios.get("http://localhost:5050/show").then(({ data }) => {
      setState({ ...state, shows: data });
    });
  });
  const position = [state.lat, state.lng];
  return (
    <React.Fragment>
      <Map
        ref={m => {
          leafletMap = m;
        }}
        center={position}
        zoom={13}
        className="price-map"
      >
        <TileLayer attribution={osrAttr} url={osrTiles} />
        {state.shows.map((show, i) => {
          return <MyMarker show={show} key={i} />;
        })}
      </Map>
    </React.Fragment>
  );
};

export default ShowMap;
