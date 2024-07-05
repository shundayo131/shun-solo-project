import React from "react";
import { createRoot } from 'react-dom/client';
import Login from './Login.jsx';

// import style
import "./style.css";

const root = createRoot(document.getElementById('login'));
root.render(
  <Login />
);