import React, { useState } from "react";
import AddBanner from "../../component/Addbanner";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.png";
import Button from 'react-bootstrap/Button';
import { ScoreTable } from "../../component/ScoreCard";
import data from "../../assets/js/data";
import scoreCard from "../../assets/img/scoreCard.png";
import { ComplatedLoader } from "../../component/LoaderPage";

const Completed = () => {
    let Complated_Data = data.Complated;
    const [loader, setLoader] = useState();
    setTimeout(() => {
        setLoader(true);
    }, 1000);
    if (loader === true) {
        return (
            <React.Fragment>
                <AddBanner path="/1234/travel/asia/food" id="banner1" Width={200} Height={200} />
                <div className="complated-content">
                    <div className="complate-card">
                        <div className="complated-top-title">Great Job!</div>
                        <div className="complated-score-card">
                            <div className="score-card-sec">
                                <img src={scoreCard} alt="score card img" />
                                <div className="ScoreCount">8/10</div>
                            </div>


                        </div>


                    </div>
                </div>
                <div className="complated-bottom">
                    <p className="complated-title">Now it’s your turn to create
                        your own quiz</p>
                    <Button variant="default" className="primary-btn mb-3" type="submit">{Complated_Data.button}</Button>
                    <ScoreTable />
                    <Button variant="default" className="primary-btn max-350 mt-3 mb-3" type="submit">{Complated_Data.button}</Button>
                </div>
                <AddBanner path="/1234/travel/asia/food" id="banner2" Width={200} Height={100} />
                <CustomAd src={Add} link="/about" alt="custom add" />
            </React.Fragment>
        )
    }
    else{
            return(
                    <React.Fragment>
                                    <ComplatedLoader />
                    </React.Fragment>
            )
    }
}

export default Completed; 