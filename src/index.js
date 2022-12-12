import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../src/store/Reducers/index";

const middlewere = [thunk];

// const store = createStore(rootReducer, applyMiddleware(...middlewere));

ReactDOM.render(<App />, document.getElementById("root"));
