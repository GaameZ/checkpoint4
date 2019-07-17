import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Connexion from "./Connexion";
import { connect } from "react-redux";
import Panel from "./Panel";
import "./Admin.css";

function AdminComponent(props) {
  const { onlineStatus, dispatch } = props;
  useEffect(() => {
    localStorage.getItem("tooooken")
      ? dispatch({ type: "CONNECT" })
      : dispatch({ type: "DECONNECT" });
  });
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        {onlineStatus ? <Panel /> : <Connexion />}
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  onlineStatus: state.connect
});

const Admin = connect(mapStateToProps)(AdminComponent);

export default Admin;
