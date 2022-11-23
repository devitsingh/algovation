import React, {useState} from "react";
import Card from "../../component/Card";
import AddBanner from "../../component/Addbanner";
import Button from 'react-bootstrap/Button';
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.png";
import ShareCard from "../../component/ShareCard";
import { ScoreCard, ScoreTable } from "../../component/ScoreCard";
import ShareGif from "../../assets/img/shareImg.png";
import data from "../../assets/js/data";



const Share = () => {
    let Share_Data = data.Share;
    let [isShowScore, setIsShowScore] = useState(false);

    const scoreHandler = () => {
        setIsShowScore(true);
    }
    return (
        <>
            <div className="share-content text-center">
                <h1 className="heading mb-3">{Share_Data.heading}</h1>
                <img src={ShareGif} alt="share gif img" className="shareImg" />
                <div className="shareTitle">{Share_Data.subtitle}</div>
                <ShareCard link={Share_Data.copyLink} button={Share_Data.button} title={Share_Data.subtitle} />
                {(isShowScore !== true) ? <Button variant="default"  className="primary-btn" onClick={scoreHandler}>SCOREBOARD</Button> : ""}
                {(isShowScore === true) ? (Share_Data.scoreboard.type === 1) ? <ScoreTable /> : <ScoreCard errortext={Share_Data.scoreboard.error} /> : '' }
                
            </div>
            <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
            <CustomAd src={Add} link="/about" alt="custom add" />
        </>
    )
}

export default Share;