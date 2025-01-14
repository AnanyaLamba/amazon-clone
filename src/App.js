import React from 'react'
import "./App.css";
import Header from "./components/navbar/header"
import Footer from './components/footer/Footer';
import Footer_Below from './components/footer/Footer_below';

const App = () => {
  return (
    <>
       <Header/>
       <Footer/>
       <Footer_Below/>
    </>
  )
}

export default App