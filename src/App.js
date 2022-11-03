import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBanner from './component/Addbanner';
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import "./assets/css/style.scss";

function App() {
  
  return (
    <div className="App">
         <Header />
         <Content />
         <Footer />
         <AddBanner path="/164808479/Leaderboard" Width="728"  Height="90"  id="div-gpt-ad-1536172937182-0"  />
    </div>

    
  );
}

export default App;
