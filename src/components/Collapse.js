import React from "react";
import { useState } from "react";
import VectorDown from "../assets/vectorDown.png";
import VectorUp from "../assets/vectorUp.png";
import "../style/collapse.css";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);

  const changeOpenClose = () => {
    setOpen(!open);
  };

  return (
    <div className="collapseApropos">
      <div className="buttonApropos" onClick={changeOpenClose}>
        <div className="collapseButton">
          {" "}
          <p>{props.title}</p>{" "}
        </div>
        {open ? (
          <img
            className="vectorup"
            src={VectorUp}
            alt="Flêche vers le haut"
          ></img>
        ) : (
          <img
            className="vectordown"
            src={VectorDown}
            alt="Flêche vers le bas"
          ></img>
        )}
      </div>
      {open && <div className="collapseContent"> {props.content} </div>}
    </div>
  );
};

export default Collapse;
