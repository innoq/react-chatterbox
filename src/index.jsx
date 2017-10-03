import React from "react";
import ReactDOM from "react-dom";
import Chatterbox from "./components/Chatterbox";

console.log("Hooray");

const APP_ROOT_ELEMENT = document.querySelector("ChatterboxRoot");
ReactDOM.render(<Chatterbox />, APP_ROOT_ELEMENT);