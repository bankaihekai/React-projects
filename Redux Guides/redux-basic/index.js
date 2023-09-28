import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // importing redux
import store from './store/index';

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// insert Provider component here
// create 'store' prop and assign value as 'store' from imported store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
); 
