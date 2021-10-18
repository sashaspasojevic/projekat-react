import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-p9cstizt.eu.auth0.com

// QZFAHW1VnwLGme8Q5wcNy6a9vX0Vr1dd

// ovi rade:

// domain = "dev-pu8wyk-g.us.auth0.com";
// clientId = "GYsVn60CkUU6fa4yiwpRrT1KVL5KuzPh";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-p9cstizt.eu.auth0.com"
      clientId="QZFAHW1VnwLGme8Q5wcNy6a9vX0Vr1dd"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
