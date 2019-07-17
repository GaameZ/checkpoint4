import React from "react";
import "./Navbar.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const shopSum =
    parseInt(localStorage.getItem("adultf1")) +
    parseInt(localStorage.getItem("childf1")) +
    parseInt(localStorage.getItem("groupf1")) +
    parseInt(localStorage.getItem("adultf2")) +
    parseInt(localStorage.getItem("childf2")) +
    parseInt(localStorage.getItem("groupf2"));

  return (
    <div>
      <div className="navbar-container">
        <div>
          <Link to="/" className="navbar-logo">
            WILD CIRCUS
          </Link>
        </div>
        <div className="navbar-items-full">
          <p className="navbar-p">
            <Link to="/Panier">
              <img
                src="https://img.icons8.com/android/24/000000/shopping-cart.png"
                alt="shopping bag"
                className="navbar-cart"
              />
            </Link>
            ({shopSum + 0})
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state
});

const Navbar = connect(mapStateToProps)(NavbarComponent);

export default Navbar;
