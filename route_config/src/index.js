import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Homepage from './pages/home';
import Aboutpage from './pages/about';
import Contactpage from './pages/contact';
import Frontpage from './pages/Front';


export default function Route_Config() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}>
          <Route path="/ContactPage" element={<Contactpage/>} />
          <Route path="/Aboutpage" element={<Aboutpage/>} />
          <Route path="/Frontpage" element={<Frontpage/>} />
         

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route_Config />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

