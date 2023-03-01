import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Components/Nav';
import Header from './Components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Header />

    
  </React.StrictMode>
);


