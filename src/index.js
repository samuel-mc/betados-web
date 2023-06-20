import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reduxThunk from 'redux-thunk';

import router from "./router";
import reducers from "./reducers";

import "./index.css";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
