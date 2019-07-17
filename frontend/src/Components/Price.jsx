import React from "react";
import "./Price.css";
import { connect } from "react-redux";
import Swal from "sweetalert2";

const PriceComponent = props => {
  const { dispatch } = props;
  const addInBag = price => {
    Swal.fire({
      title: "Ajouter les places au panier?",
      html: "<p>Combien voulez vous de places ?</p>",
      input: "text",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Payer !",
      cancelButtonText: "Annuler"
    }).then(result => {
      console.log(result.value);
      switch (price) {
        case "adultf1":
          if (localStorage.getItem("adultf1")) {
            localStorage.setItem(
              "adultf1",
              parseInt(localStorage.getItem("adultf1")) + parseInt(result.value)
            );
          } else {
            localStorage.setItem("adultf1", 1);
          }
          break;
        case "childf1":
          if (localStorage.getItem("childf1")) {
            localStorage.setItem(
              "childf1",
              parseInt(localStorage.getItem("childf1")) + parseInt(result.value)
            );
          } else {
            localStorage.setItem("childf1", 1);
          }
          break;
        case "groupf1":
          if (localStorage.getItem("groupf1")) {
            localStorage.setItem(
              "groupf1",
              parseInt(localStorage.getItem("groupf1")) + parseInt(result.value)
            );
          } else {
            localStorage.setItem("groupf1", 1);
          }
          break;
        case "adultf2":
          if (localStorage.getItem("adultf2")) {
            localStorage.setItem(
              "adultf2",
              parseInt(localStorage.getItem("adultf2")) + parseInt(result.value)
            );
          } else {
            localStorage.setItem("adultf2", 1);
          }
          break;
        case "childf2":
          if (localStorage.getItem("childf2")) {
            localStorage.setItem(
              "childf2",
              parseInt(localStorage.getItem("childf2")) + parseInt(result.value)
            );
          } else {
            localStorage.setItem("childf2", 1);
          }
          break;
        case "groupf2":
          if (localStorage.getItem("groupf2")) {
            localStorage.setItem(
              "groupf2",
              parseInt(localStorage.getItem("groupf2")) + parseInt(result.value)
            );
          } else {
            localStorage.setItem("groupf2", 1);
          }
          break;
        default:
          console.log("default");
      }
      dispatch({ type: "ADD" });
    });
  };

  return (
    <div>
      <table className="price-table">
        <tbody>
          <tr>
            <th className="price-th">Période</th>
            <th className="price-th">Adultes</th>
            <th className="price-th">Enfants</th>
            <th className="price-th">Groupe(+10 Pers.)</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className="price-th">SEMAINES (HORS MERCREDI)</th>
            <td className="price-td">
              20€
              <button
                className="price-table-button"
                onClick={() => addInBag("adultf1")}
              >
                <img
                  src="https://img.icons8.com/android/24/000000/shopping-cart.png"
                  alt="add in shopping bag"
                />
              </button>
            </td>
            <td className="price-td">
              13€
              <button
                className="price-table-button"
                onClick={() => addInBag("childf1")}
              >
                <img
                  src="https://img.icons8.com/android/24/000000/shopping-cart.png"
                  alt="add in shopping bag"
                />
              </button>
            </td>
            <td className="price-td">
              13€
              <button
                className="price-table-button"
                onClick={() => addInBag("groupf1")}
              >
                <img
                  src="https://img.icons8.com/android/24/000000/shopping-cart.png"
                  alt="add in shopping bag"
                />
              </button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className="price-th">WEEK-END ET MERCREDI</th>
            <td className="price-td">
              25€
              <button
                className="price-table-button"
                onClick={() => addInBag("adultf2")}
              >
                <img
                  src="https://img.icons8.com/android/24/000000/shopping-cart.png"
                  alt="add in shopping bag"
                />
              </button>
            </td>
            <td className="price-td">
              18€
              <button
                className="price-table-button"
                onClick={() => addInBag("childf2")}
              >
                <img
                  src="https://img.icons8.com/android/24/000000/shopping-cart.png"
                  alt="add in shopping bag"
                />
              </button>
            </td>
            <td className="price-td">
              18€
              <button
                className="price-table-button"
                onClick={() => addInBag("groupf2")}
              >
                <img
                  src="https://img.icons8.com/android/24/000000/shopping-cart.png"
                  alt="add in shopping bag"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state
});

const Price = connect(mapStateToProps)(PriceComponent);

export default Price;
