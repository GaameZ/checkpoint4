import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import "./Admin.css";
const ManageShow = () => {
  const [state, setState] = useState({ ville: "", date: "", lat: "", lon: "" });

  const submitForm = event => {
    event.preventDefault();
    Swal.fire({
      title: "Ajouter cet événement ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui",
      cancelButtonText: "Non"
    }).then(result => {
      Axios.post("http://localhost:5050/show", {
        ville: state.ville,
        date: state.date,
        lat: parseFloat(state.lat),
        lon: parseFloat(state.lon)
      }).then(() => {
        Swal.fire({
          title: "Evenement ajouté à la liste",
          type: "success"
        });
      });
    });
  };

  return (
    <div>
      <form onSubmit={submitForm} className="manageact-form">
        <div className="admin-input">
          <p>VILLE:</p>
          <input
            className="admin-input"
            type="text"
            name="ville"
            placeholder="Ville de la représentation"
            onChange={e => {
              setState({ ...state, ville: e.target.value });
            }}
          />
        </div>
        <div className="admin-input">
          <p>DATE:</p>
          <input
            className="admin-input"
            type="date"
            name="date"
            onChange={e => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="admin-input">
          <p>LATITUDE:</p>
          <input
            className="admin-input"
            type="text"
            name="lat"
            placeholder="Latitude"
            onChange={e => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="admin-input">
          <p>LONGITUDE:</p>
          <input
            className="admin-input"
            type="text"
            name="lon"
            placeholder="Longitude"
            onChange={e => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div>
          <button type="submit" className="admin-button">
            Ajouter le spectacle
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageShow;
