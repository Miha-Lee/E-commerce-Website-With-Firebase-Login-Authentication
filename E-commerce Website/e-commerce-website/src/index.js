import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductProvider } from "./Context/Context";
import { StateProvider } from "./Context/StateProvider";
import reducer, { initialState } from "./reducer/reducer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ProductProvider>
        <App />
      </ProductProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
