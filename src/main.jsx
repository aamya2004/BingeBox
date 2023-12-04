import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/Headeritem.css";
import "./styling/moviePage.css";
import { Provider } from "react-redux";
import { store } from "./Store/configureStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
