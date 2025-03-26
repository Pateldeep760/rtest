import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import App from './App'
import Nopage from './Nopage/Nopage'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/content' element={<Content />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='*' element={<Nopage />} />
  
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
