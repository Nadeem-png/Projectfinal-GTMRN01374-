import React from "react";

import Header from './components/Header';
import './App.css';
import Footer from "./components/Footer";
import Blog from './components/Blog';
import Team from './components/Team'
import Gallery from "./components/Gallery";
import About from "./components/About";
import Service from "./components/Service";
import Subcribe from "./components/Subcribe";



function App() {
  return (
   <>
   
    
      <Header/>
      
      <Service/>
      <Subcribe/>
      <About/>
      <Gallery/>
      <Team/>
      <Blog/>
      <Footer/>
    
   </>
  );
}

export default App;
