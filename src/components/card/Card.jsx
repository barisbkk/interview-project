import React from "react";
import { arrowup, arrowdown } from "../../helper/icon";
import { useState } from "react";

const Card = (props) => {
  const [isAlive, setisAlive] = useState(true);
  function handleChange() {
    setisAlive((a) => !a);
  }

  return (
    <div className="card--body">
      <div className="card--header">
        <h5>{props.question} </h5>
        <h4 onClick={handleChange}>{isAlive ? arrowdown : arrowup}</h4>
      </div>
      {!isAlive && <p>{props.answer}</p>}
    </div>
  );
};

export default Card;
