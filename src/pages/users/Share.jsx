import React, {useState} from "react";
import Card from "../../component/Card";
import AddBanner from "../../component/Addbanner";
import Button from 'react-bootstrap/Button';
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.png";
import ShareCard from "../../component/ShareCard";
import { ScoreCard, ScoreTable } from "../../component/ScoreCard";
import ShareGif from "../../assets/img/shareImg.png";
import UserDelModal from "../../component/UserDelModal";
import data from "../../assets/js/data";
import { ShareLoader } from "../../component/LoaderPage";




const Share = () => {
    let Share_Data = data.Share;
    let [isShowScore, setIsShowScore] = useState(false);
    let [loader, setLoader] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const scoreHandler = () => {
        setIsShowScore(true);
    }
    setTimeout(() => {
        setLoader(true);
    }, 1000);

    if(loader === true){
        return (
            <React.Fragment>
                <div className="share-content text-center">
                    <h1 className="heading mb-3">{Share_Data.heading}</h1>
                    <img src={ShareGif} alt="share gif img" className="shareImg" />
                    <div className="shareTitle">{Share_Data.subtitle}</div>
                    <ShareCard link={Share_Data.copyLink} button={Share_Data.button} title={Share_Data.subtitle} />
                    {(isShowScore !== true) ? <Button variant="default"  className="primary-btn" onClick={scoreHandler}>SCOREBOARD</Button> : ""}
                    {(isShowScore === true) ? (Share_Data.scoreboard.type === 1) ? <ScoreTable /> : <ScoreCard errortext={Share_Data.scoreboard.error} /> : '' }
                    {(isShowScore === true) ? <Button variant="default"  className="primary-btn max-196 mt-3" onClick={() => setModalShow(true)}>DELETE</Button>
                    : '' }
                </div>
                <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
                <CustomAd src={Add} link="/about" alt="custom add" />
                <UserDelModal show={modalShow}
                onHide={() => setModalShow(false)} />
            </React.Fragment>
        )
    }
    else{
            return(
                    <React.Fragment>
                            <ShareLoader />
                    </React.Fragment>
            )
    }
}

export default Share;