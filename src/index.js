import React from 'react';
import ReactDOM from 'react-dom/client';
import  ColorProvider  from "./components/ColorProvider.js";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Menu from './components/Menu';
import data from './data/recipes.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
)



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// <Menu recipes={data} />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
