import React from "react";
import Card from "../../component/Card";
import AddBanner from "../../component/Addbanner";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.jpeg";


const ViewAnswer = () => {
    return (
        <>
                <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
                <div className="view-answer">
                            <h1 className="heading mb-25 mt-4">D's Answers</h1>
                           <div className="ansCardSec">
                                
                           </div>
                </div>
                <CustomAd src={Add} link="/about" alt="custom add" />
        </>
    )
}

export default ViewAnswer;