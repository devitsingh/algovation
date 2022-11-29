import React from "react";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.png";
import AddBanner from "../../component/Addbanner";
import FormSec from "../../component/FormSec";
import data from "../../assets/js/data";


class Accpet extends React.Component {
      render(){
                let Accpet_Data = data.Accpet;
                return (
                        <React.Fragment>
                                <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
                                <div className="home-content">
                                        <FormSec Button={Accpet_Data.button} placeholder={Accpet_Data.placeholder} action="accpet" navigates="answer" />
                                </div>
                                <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
                                <CustomAd src={Add} link="/about" alt="custom add" />
                        </React.Fragment>
                )
        }   
}

export default Accpet;