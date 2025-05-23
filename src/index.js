import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import App from './App'
import Nopage from './Nopage/Nopage'
import Content2 from './Content2/Content2'
import Content3 from './Content3/Content3'
import Abcd from './Abcd/Abcd'
import Us1 from './Us1/Us1'
import Us2 from './Us2/Us2'
import Us3 from './Us3/Us3'
import Us4 from './Us4/Us4'
import Us5 from './Us5/Us5';
import Us6 from './Us6/Us6';
import Us7 from './Us7/Us7';
import Us8 from './Us8/Us8';
import Us9 from './Us9/Us9';
import Us10 from './Us10/Us10';
import Us11 from './Us11/Us11';
import Us12 from './Us12/Us12';
import Us13 from './Us13/Us13';
import Us14 from './Us14/Us14';
import ButtonComponent from './ButtonScss/ButtonComponent';
import Product from './Product/Product';
import Ue1 from './Ue1/Ue1';
import Ue2 from './Ue2/Ue2';
import ScrollToTop from "react-scroll-to-top";
import LSS1 from './LocalSessionStorage/LSS1';
import CodePractice from './CP/CodePractice';
import Api from './Api/Api';
import Nesting from './Nesting/Nesting';

import ValuePackageProvider from './Context/ValuePackageProvider';
import NestingJson from './Nesting/NestingJson';
import GoToTop from './GoToTop';
import { BiArrowFromLeft } from 'react-icons/bi';
import Use from './Use';
import Toypage from './Toys/Toypage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ValuePackageProvider>
        <Header />
        <GoToTop />
        <ScrollToTop smooth
          component={<BiArrowFromLeft size={19} />} />

        <Routes>
          {/* <Route path='/:name' element={<Use />} /> */}
          <Route path='/:pagename' element={<Toypage />} />
          <Route path='/' element={<Content />} />
          <Route path='/content' element={<Content />} />
          <Route path='/content2' element={<Content2 />} />
          <Route path='/content3' element={<Content3 />} />
          <Route path='*' element={<Nopage />} />
          <Route path='/us1' element={<Us1 />} />
          <Route path='/us2' element={<Us2 />} />
          <Route path='/Us3' element={<Us3 />} />
          <Route path='/Us4' element={<Us4 />} />
          <Route path='/Us5' element={<Us5 />} />
          <Route path='/Us6' element={<Us6 />} />
          <Route path='/Us7' element={<Us7 />} />
          <Route path='/Us8' element={<Us8 />} />
          <Route path='/Us9' element={<Us9 />} />
          <Route path='/Us10' element={<Us10 />} />
          <Route path='/Us11' element={<Us11 />} />
          <Route path='/Us12' element={<Us12 />} />
          <Route path='/Us13' element={<Us13 />} />
          <Route path='/Us14' element={<Us14 />} />
          <Route path='/UserCard' element={<App />} />
          <Route path='/UserCard' element={<App />} />
          <Route path='/ButtonScss' element={<ButtonComponent />} />
          <Route path='/ProductDetails' element={<Product />} />
          <Route path='/Ue1' element={<Ue1 />} />
          <Route path='/Ue2' element={<Ue2 />} />
          <Route path='/LSS1' element={<LSS1 />} />
          <Route path='/CP1' element={<CodePractice />} />
          <Route path='/Api' element={<Api />} />
          <Route path='/Nesting' element={<Nesting />} />
          <Route path='/NestingJson' element={<NestingJson />} />


        </Routes>
        <Footer />
      </ValuePackageProvider>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
