import React, {useState} from "react";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.png";
import AddBanner from "../../component/Addbanner";
import FormSec from "../../component/FormSec";
import data from "../../assets/js/data";
import Custom from "../../assets/js/Custom";





const Home = () => {
    let Home_Data = data.Home;
    return (
        <>
            <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
            <div className="home-content">  
                <FormSec Button={Home_Data.button} placeholder={Home_Data.placeholder} action="home" navigates="question" />
            </div>

            <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
            <CustomAd src={Add} link="/about" alt="custom add" />
        </>
    )
}

export default Home;