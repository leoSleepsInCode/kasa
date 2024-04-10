import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
// import Nav from './components/navbar/navbar';
// import Footer from './components/footer/footer';
// import Housing from './pages/housing/housing';
// import About from './pages/about/about';
// import Error from './pages/error/error';
//  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/housing/:id" element={<Housing />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
