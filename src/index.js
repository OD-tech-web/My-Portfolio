import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App'

function Components() {
  return (
      <App/>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Components/>);