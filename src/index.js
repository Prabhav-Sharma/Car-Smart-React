import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import Contexts from "./contexts/Providers/ContextsProvider";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Contexts>
      <App />
    </Contexts>
  </React.StrictMode>,
  document.getElementById("root")
);
