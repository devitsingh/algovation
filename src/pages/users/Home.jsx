import React from "react";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.jpeg";
import AddBanner from "../../component/Addbanner";
import FormSec from "../../component/FormSec";
import data from "../../assets/js/data";

const Home = () => {
    let Home_Data = data.Home;
    return (
        <>
            
            <div className="home-content">
                <h1 className="heading mb-25">{Home_Data.heading}</h1>
                <h2 className="subheading">{Home_Data.subheading}</h2>
                <ul className="list-style">
                    {Home_Data.list_data.map((list) => (<li className="text-p">{list}</li>))}
                </ul>
                <FormSec Button={Home_Data.button} placeholder={Home_Data.placeholder} action="home" navigates="question" />
            </div>

            <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
            <CustomAd src={Add} link="/about" alt="custom add" />
        </>
    )
}

export default Home;