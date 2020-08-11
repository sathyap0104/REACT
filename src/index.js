//var React = require("react");
//var ReactDom = require("react-dom");

//ReactDom.render(<h1>Hello World</h1>,document.getElementById("root"));

import React from "react";
import ReactDom from "react-dom";

const fname = "Sathya";
const lname = "P";
const number = 7;

ReactDom.render(
  <div>
    <h1> Hello {fname + " " + lname} </h1>
    <p>your lucky number is {number} </p>
  </div>,
  document.getElementById("root")
);
