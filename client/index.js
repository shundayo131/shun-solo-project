import React from "react";
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import App from './App.jsx';
// TO DO: import store from ./store (to set up Redux Store later)

// import style
import "./style.css";

console.log('index.js is loaded')

const root = createRoot(document.getElementById('app'));
root.render(
  // TO DO: wrap the app in the provider component and pass in the store (to use Redux)
  <App />
);