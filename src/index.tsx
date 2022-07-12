import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import "./i18n/config";
import { Provider } from "react-redux";
import store from "./redux/store";
// import axios from "axios";

// axios.defaults.headers['x-icode'] = 'qKhDxI15yz';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();