import React from 'react'
import "./App.css";
import Footer from './components/footer/Footer';
import Footer_Below from './components/footer/Bottom';
import Navbar from './components/navbar/Navbar';
import Header from './components/navbar/Header';
import Crausal from './components/Crousal/Crausal';
import Card from './components/Cards/Cards'

const App = () => {
  return (
    <>
       
       <Header/>
       <Navbar/>
       <Crausal/>
       <Card />
       <Footer/>
       {/* <Footer_Below/> */}
    </>
  )
}

export default App