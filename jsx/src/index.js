// 1) import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with the id of root
const el = document.getElementById("root");
// 3) tell react to take control of that element
const root = ReactDOM.createRoot(el);
// 4) Create a component
function App() {
  return <input spellCheck></input>;
}
// 5) Show the component on the screen
root.render(<App />);
