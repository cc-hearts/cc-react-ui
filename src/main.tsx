import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root")!);
export function render(callback?: () => void) {
  if (callback) {
    callback();
  }
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
render();
