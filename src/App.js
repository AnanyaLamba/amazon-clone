// import React from 'react'
// import "./App.css";
// import Footer from './components/footer/Footer';
// import Footer_Below from './components/footer/Bottom';
// import Navbar from './components/navbar/Navbar';
// import Header from './components/navbar/Header';
// import Crausal from './components/Crousal/Crausal';
// import Card from './components/Cards/Cards';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from './components/navbar/Cart';
// const App = () => {
//   return (
//     <>
//     <Router>
//       <Router/>

//        <Header/>
//        <Navbar/>
//        <Crausal/>
//        <Card />
//        <Footer/>
//        {/* <Footer_Below/> */}
//     </>
//   )
// }

// export default App

import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/navbar/Header";
import HomePage from "./components/Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./components/Pages/CartPage";
import Login from "./components/Pages/login"
import RegisterPage from "./components/Pages/signup"
import Profile from "./components/Pages/Profile"

function layout(element) {
  return (
    <>
      <Header />
      <Navbar />

      {element}

      <Footer />
    </>
  );
}
const App = () => {
  return (
    <Router>
      {/* Common Layout Components */}
      {/* <Header />
      <Navbar /> */}

      <Routes>
        <Route path="/" element={layout(<HomePage />)} />
        <Route path="/cart" element={layout(<CartPage />)} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<RegisterPage/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
};

export default App;
