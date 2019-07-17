import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Bag from "./Pages/Bag/Bag";
import Admin from "./Pages/Admin/Admin";
import Act from "./Pages/Act/Act";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("adultf1")) {
      localStorage.setItem("adultf1", 0);
    }
    if (!localStorage.getItem("childf1")) {
      localStorage.setItem("childf1", 0);
    }
    if (!localStorage.getItem("groupf1")) {
      localStorage.setItem("groupf1", 0);
    }
    if (!localStorage.getItem("adultf2")) {
      localStorage.setItem("adultf2", 0);
    }
    if (!localStorage.getItem("childf2")) {
      localStorage.setItem("childf2", 0);
    }
    if (!localStorage.getItem("groupf2")) {
      localStorage.setItem("groupf2", 0);
    }
  });
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Panier" component={Bag} />
        <Route path="/admin" component={Admin} />
        <Route path="/activités" component={Act} />
      </Switch>
    </div>
  );
}
export default App;
