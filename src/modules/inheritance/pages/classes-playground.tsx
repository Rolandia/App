import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Store } from "../classes/Store";
import { Address } from "../classes/Address";
import { setInterval } from "timers";

interface State {
  startAt?: number;
  endAt?: number;
  tempo: number;
}
export const ClassesPlayground = () => {
  const [currentCount, setCount] = useState(10);
  const onClickDoBotao = () => {
    console.log("Botão clicado");
  };
  return (
    <div>
      <ul>
        <div>Tempo: {currentCount} </div>
        <button onClick={onClickDoBotao}>Iniciar</button>
      </ul>
    </div>
  );
};

export default ClassesPlayground;
