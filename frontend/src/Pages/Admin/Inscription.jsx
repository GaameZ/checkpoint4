import React, { useState } from "react";
import axios from "axios";

export default function Inscription() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    message: ""
  });
  const submitForm = event => {
    event.preventDefault();
    axios
      .post(`http://localhost:5050/auth/signup`, {
        email: values.email,
        password: values.password,
        passwordConfirm: values.passwordConfirm
      })
      .then(({ data }) => {
        alert(data.message);
      })
      .catch(error => {
        setValues({ ...values, message: error.response.data.message });
      });
  };
  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={submitForm}>
        <div>
          <label>
            E-mail :
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Adresse email"
              onChange={e => {
                setValues({ ...values, [e.target.name]: e.target.value });
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Mot de passe :
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              onChange={e => {
                setValues({ ...values, [e.target.name]: e.target.value });
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Confirmer mot de passe :
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirmer mot de passe"
              onChange={e => {
                setValues({ ...values, [e.target.name]: e.target.value });
              }}
            />
          </label>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      {values.message !== "" ? values.message : null}
    </div>
  );
}
