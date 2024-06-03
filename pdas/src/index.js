import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//select element
const el = document.getElementById("root");
//create root
const root = ReactDOM.createRoot(el);
//render app in rooot
root.render(<App />);
