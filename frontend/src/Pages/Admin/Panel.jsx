import React, { useState } from "react";
import ManageShow from "./ManageShow";
import ManageAct from "./ManageAct";
import "./Admin.css";

const Panel = () => {
  const [state, setState] = useState("SHOW");
  return (
    <div>
      <button onClick={() => setState("SHOW")} className="admin-button">
        REPRESENTATION
      </button>
      <button onClick={() => setState("ACT")} className="admin-button">
        NUMEROS
      </button>
      {state === "SHOW" ? <ManageShow /> : null}
      {state === "ACT" ? <ManageAct /> : null}
    </div>
  );
};

export default Panel;
