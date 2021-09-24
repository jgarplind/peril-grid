import React from "react";
import ReactDOM from "react-dom";
import { Perils } from "./features/perils/Perils";
import { Global } from "@emotion/react";
import { globalStyles } from "./components/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Perils />
  </React.StrictMode>,
  document.getElementById("root")
);
