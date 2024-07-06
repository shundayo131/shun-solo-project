import React from "react";
import { createRoot } from 'react-dom/client';
import Signup from './Signup.jsx';

// import style
import "./signup.css";

const root = createRoot(document.getElementById('signup'));
root.render(
  <Signup />
);