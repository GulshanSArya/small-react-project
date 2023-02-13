import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
//import Counter from "./Counter";
import Todolist from "./Todolist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    <Todolist />
  </React.StrictMode>
);

reportWebVitals();
