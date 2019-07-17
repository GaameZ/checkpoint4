import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Swal from "sweetalert2";
import axios from "axios";
import "./Bag.css";

const Bag = () => {
  const [state, setState] = useState({
    adultf1: 0,
    childf1: 0,
    groupf1: 0,
    adultf2: 0,
    childf2: 0,
    groupf2: 0
  });
  const total =
    state.adultf1 * 20 +
    state.adultf2 * 25 +
    state.childf1 * 13 +
    state.childf2 * 18 +
    state.groupf1 * 13 +
    state.groupf2 * 18;
  useEffect(() => {
    setState({
      adultf1: parseInt(localStorage.getItem("adultf1")),
      childf1: parseInt(localStorage.getItem("childf1")),
      groupf1: parseInt(localStorage.getItem("groupf1")),
      adultf2: parseInt(localStorage.getItem("adultf2")),
      childf2: parseInt(localStorage.getItem("childf2")),
      groupf2: parseInt(localStorage.getItem("groupf2"))
    });
  }, []);
  const onDelete = group => {
    localStorage.setItem(group, 0);
    setState({ ...state, [group]: 0 });
  };

  const sendMoney = () => {
    Swal.fire({
      title: "Commander les places ?",
      html:
        "<p>Vous ne pourrez plus annuler votre commande !</p>" +
        "<p>Votre adresse email :</p>",
      input: "text",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Payer !"
    }).then(result => {
      if (result.value) {
        axios
          .post("http://localhost:5050/shopping", {
            adultf1: state.adultf1,
            childf1: state.childf1,
            groupf1: state.groupf1,
            adultf2: state.adultf2,
            childf2: state.childf2,
            groupf2: state.groupf2,
            email: result.value,
            amount: total
          })
          .then(() => {
            Swal.fire({
              title: "Merci pour votre commande",
              text: result.value,
              type: "success"
            });
            localStorage.setItem("adultf1", 0);
            localStorage.setItem("childf1", 0);
            localStorage.setItem("groupf1", 0);
            localStorage.setItem("adultf2", 0);
            localStorage.setItem("childf2", 0);
            localStorage.setItem("groupf2", 0);
            setState({
              adultf1: 0,
              childf1: 0,
              groupf1: 0,
              adultf2: 0,
              childf2: 0,
              groupf2: 0
            });
          });
      }
    });
  };
  return (
    <div className="bag-container">
      <Navbar />
      <div className="bag-content">
        <h1>Votre Panier</h1>
        <table className="bag-table">
          <tbody className="bag-tbody">
            <tr className="bag-tr">
              <th className="bag-th">Type de place</th>
              <th className="bag-th">Quantité</th>
              <th className="bag-th">Prix</th>
              <th className="bag-th" />
            </tr>
          </tbody>
          {state.adultf1 > 0 ? (
            <tbody className="bag-tbody">
              <tr className="bag-tr">
                <td className="bag-td">Adulte (Formule 1)</td>
                <td className="bag-td">{state.adultf1}</td>
                <td className="bag-td">x 20€ = {state.adultf1 * 20}€</td>
                <td className="bag-td">
                  <button
                    onClick={() => onDelete("adultf1")}
                    className="bag-button"
                  >
                    <img
                      src="https://img.icons8.com/ios/25/000000/delete.png"
                      alt="delete"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          ) : null}
          {state.childf1 > 0 ? (
            <tbody className="bag-tbody">
              <tr className="bag-tr">
                <td className="bag-td">Enfant (Formule 1)</td>
                <td className="bag-td">{state.childf1}</td>
                <td className="bag-td">x 13€ = {state.childf1 * 13}€</td>
                <td className="bag-td">
                  <button
                    onClick={() => onDelete("childf1")}
                    className="bag-button"
                  >
                    <img
                      src="https://img.icons8.com/ios/25/000000/delete.png"
                      alt="delete"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          ) : null}
          {state.groupf1 > 0 ? (
            <tbody className="bag-tbody">
              <tr className="bag-tr">
                <td className="bag-td">Groupe (Formule 1)</td>
                <td className="bag-td">{state.groupf1}</td>
                <td className="bag-td">x 13€ = {state.groupf1 * 13}€</td>
                <td className="bag-td">
                  <button
                    onClick={() => onDelete("groupf1")}
                    className="bag-button"
                  >
                    <img
                      src="https://img.icons8.com/ios/25/000000/delete.png"
                      alt="delete"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          ) : null}
          {state.adultf2 > 0 ? (
            <tbody className="bag-tbody">
              <tr className="bag-tr">
                <td className="bag-td">Adulte (Formule 2)</td>
                <td className="bag-td">{state.adultf2}</td>
                <td className="bag-td">x 25€ = {state.adultf2 * 25}€</td>
                <td className="bag-td">
                  <button
                    onClick={() => onDelete("adultf2")}
                    className="bag-button"
                  >
                    <img
                      src="https://img.icons8.com/ios/25/000000/delete.png"
                      alt="delete"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          ) : null}
          {state.childf2 > 0 ? (
            <tbody className="bag-tbody">
              <tr className="bag-tr">
                <td className="bag-td">Enfant (Formule 2)</td>
                <td className="bag-td">{state.childf2}</td>
                <td className="bag-td">x 18€ = {state.childf2 * 18}€</td>
                <td className="bag-td">
                  <button
                    onClick={() => onDelete("childf2")}
                    className="bag-button"
                  >
                    <img
                      src="https://img.icons8.com/ios/25/000000/delete.png"
                      alt="delete"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          ) : null}
          {state.groupf2 > 0 ? (
            <tbody className="bag-tbody">
              <tr className="bag-tr">
                <td className="bag-td">Groupe (Formule 2)</td>
                <td className="bag-td">{state.groupf2}</td>
                <td className="bag-td">x 18€ = {state.groupf2 * 18}€</td>
                <td className="bag-td">
                  <button
                    onClick={() => onDelete("groupf2")}
                    className="bag-button"
                  >
                    <img
                      src="https://img.icons8.com/ios/25/000000/delete.png"
                      alt="delete"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          ) : null}
        </table>
        <h2>TOTAL: {total}€</h2>
        <button onClick={() => sendMoney()} className="bag-button-pay">
          PAYER
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Bag;
