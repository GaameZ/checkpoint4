import React, { useState } from "react";
import "./Admin.css";
import Axios from "axios";
import Swal from "sweetalert2";

const ManageAct = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    photo: "",
    artist: "",
    artistPhoto: ""
  });
  const submitForm = event => {
    event.preventDefault();
    Swal.fire({
      title: "Ajouter ce numéro?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui",
      cancelButtonText: "Non"
    }).then(result => {
      Axios.post("http://localhost:5050/act", {
        title: state.title,
        description: state.description,
        photo_url: state.photo,
        artist_name: state.artist,
        artist_photo_url: state.artistPhoto
      }).then(() => {
        Swal.fire({
          title: "Numéro ajouté à la liste",
          type: "success"
        });
      });
    });
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="admin-input">
          <p>TITRE:</p>
          <input
            className="admin-input"
            type="text"
            name="title"
            placeholder="Titre du numéro"
            onChange={e => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="admin-input">
          <p>DESCRIPTION:</p>
          <textarea
            className="admin-input"
            name="description"
            placeholder="Description du numéro"
            onChange={e => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="admin-input">
          <p>PHOTO(URL):</p>
          <input
            className="admin-input"
            type="text"
            name="photo"
            placeholder="Ajoutez une photo à votre description"
            onChange={e => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="admin-input">
          <p>ARTISTE:</p>
          <input
            className="admin-input"
            type="text"
            name="artist"
            placeholder="Nom de l'artiste"
            onChange={e => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="admin-input">
          <p>PHOTO ARTISTE (url):</p>
          <input
            className="admin-input"
            type="text"
            name="artistPhoto"
            placeholder="Ajoutez la photo de l'artiste"
            onChange={e => {
              setState({ ...state, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div>
          <button type="submit" className="admin-button">
            Ajouter le numéro
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageAct;
