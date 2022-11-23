import React from "react";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.png";
import AddBanner from "../../component/Addbanner";
import FormSec from "../../component/FormSec";
import data from "../../assets/js/data";


const Accpet = () => {
        let Accpet_Data = data.Accpet;
        return (
                <>
                        <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
                        <div className="home-content">
                                <FormSec Button={Accpet_Data.button} placeholder={Accpet_Data.placeholder} action="accpet" />
                        </div>
                        <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
                        <CustomAd src={Add} link="/about" alt="custom add" />
                </>
        )
}

export default Accpet;