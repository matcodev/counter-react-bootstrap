import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from './components/SecondsCounter';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "@fortawesome/fontawesome-free";

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;


setInterval(() => {

  num1++;
  num2++;
  num3++;
  num4++;
  num5++;
  num6++;

  ReactDOM.render(
    <React.StrictMode>

    <SecondsCounter  
      num1 = {Math.floor(num1)}
      num2 = {Math.floor(num2/10)}
      num3 = {Math.floor(num3/100)}
      num4 = {Math.floor(num4/1000)}
      num5 = {Math.floor(num5/10000)}
      num6 = {Math.floor(num6/100000)}
      />

    </React.StrictMode>
    ,
    document.getElementById("root")
  );
}, 1000);


