import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Products from "./components/Products";
import Shopcard from "./components/Shopcard";
import cart from  './Image/cart.png';
import Footer from "./components/Footer";

import axios from "axios";
import Slide from "./components/Slide/Slide";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./components/Contact";


function App() {
  const [count, setCount] = useState(0);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBW4GsXkL25g57SL9iKcwksjrTUXNMI9ro"
  })
  return (
    <>
    <Router>
    <Navbar/>
    <Slide />
   
    <Routes>
     <Route exact path="/" element={<Products setCount={setCount} count={count} />}/>
     <Route  path="/about" element={<About />} />
     <Route  path="/contact" element={<Contact/>}/>
    </Routes>
    </Router>
    <div style={{zIndex:'1'}}>
    <a><img style={{padding:`5px`,width:`1.7cm` ,height:`2cm`,position: "fixed", bottom: 20, right: 30}} src={cart} alt="cart" /></a>
    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color:'white',padding:`5px`,width:`1cm` ,height:`1cm`,position: "fixed", bottom: 20, right: 30}}>{count}</div>
    <Footer />
    </div>
    </>
  );
}

export default App;
