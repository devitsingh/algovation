import React from "react";
import Card from "../../component/Card";
import AddBanner from "../../component/Addbanner";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.jpeg";
import ShareCard from "../../component/ShareCard";
import { ScoreCard } from "../../component/ScoreCard";
import data from "../../assets/js/data";



const Share = () => {
    let Share_Data = data.Share;
    return (
        <>
            <div className="share-content text-center">
                <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
                <h1 className="heading mb-3">{Share_Data.heading}</h1>
                <h2 className="subheading">{Share_Data.subheading}</h2>
                <ShareCard link={Share_Data.copyLink} button={Share_Data.button} title={Share_Data.subtitle} />
                <ScoreCard errortext={Share_Data.scoreboard.error} />   
            </div>
            <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
            <CustomAd src={Add} link="/about" alt="custom add" />
        </>
    )
}

export default Share;