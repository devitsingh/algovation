import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import "./assets/css/style.scss";
import "../src/assets/js/Custom.js";

function App() {
  
  return (
    <div className="App">
         <Header />
         <Content />
         <Footer />
    </div>

    
  );
}

export default App;
