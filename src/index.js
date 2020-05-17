import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "url('https://news-cdn.softpedia.com/images/news2/did-you-know-the-windows-xp-wallpaper-was-so-expensive-fedex-refused-to-ship-it-520483-2.jpg') center center no-repeat",
        objectFit: "contain",
      }}
    >
      <div style={{ width: 350 }}>
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
