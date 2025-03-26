import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import App from './App'
import Nopage from './Nopage/Nopage'
import Content2 from './Content2/Content2'
import Content3 from './Content3/Content3'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/content' element={<Content />} />
        <Route path='/content2' element={<Content2 />} />
        <Route path='/content3' element={<Content3 />} />
        <Route path='*' element={<Nopage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
