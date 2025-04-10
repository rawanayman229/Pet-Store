import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // if you use Tailwind or global CSS

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
