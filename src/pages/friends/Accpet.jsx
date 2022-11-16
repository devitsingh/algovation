import React from "react";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.jpeg";
import AddBanner from "../../component/Addbanner";
import FormSec from "../../component/FormSec";
import data from "../../assets/js/data";


const Accpet = () => {
        let Accpet_Data = data.Accpet;
        return (
                <>
                        <div className="home-content">
                                <h1 className="heading mb-25">{Accpet_Data.heading}</h1>
                                <h2 className="subheading">{Accpet_Data.subheading}</h2>
                                <ul className="list-style">{Accpet_Data.list_data.map((list) => (
                                        <li className="text-p">{list}</li>
                                ))}
                                </ul>
                                <FormSec Button={Accpet_Data.button} placeholder={Accpet_Data.placeholder} action="accpet" />
                        </div>

                        <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
                        <CustomAd src={Add} link="/about" alt="custom add" />
                </>
        )
}

export default Accpet;