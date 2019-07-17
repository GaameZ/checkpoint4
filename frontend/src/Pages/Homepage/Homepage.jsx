import React from "react";
import background from "../../Pictures/lion.jpg";
import "./Homepage.css";
import Navbar from "../../Components/Navbar";
import Price from "../../Components/Price";
import ShowMap from "../../Components/ShowMap";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <img src={background} alt="" className="homepage-img-background" />
      <div className="homepage-description">
        <p className="homepage-description-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, nam
          voluptatem. Quaerat, facere itaque eos rem dolorem dicta consequuntur
          adipisci distinctio odit deleniti unde omnis, nulla ea nesciunt harum
          repudiandae.
        </p>
        <Link to="/activités" className="homepage-button">
          DECOUVREZ NOS NUMEROS
        </Link>
      </div>
      <h3 className="homepage-h3">Tarifs :</h3>
      <Price />
      <div className="homepage-map">
        <h3 className="homepage-h3">Carte de nos représentations :</h3>
        <ShowMap />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
