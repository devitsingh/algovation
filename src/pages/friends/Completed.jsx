import React from "react";
import AddBanner from "../../component/Addbanner";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.jpeg";
import Button from 'react-bootstrap/Button';
import { ScoreTable } from "../../component/ScoreCard";
import data from "../../assets/js/data";

const Completed = () => {
    let Complated_Data = data.Complated;
    return (
        <React.Fragment>
            <AddBanner path="/1234/travel/asia/food" id="banner1" Width={200} Height={200} />
            <div className="complated-content">
                <div className="complate-card">
                    <h1 className="heading mb-25">{Complated_Data.heading}</h1>
                    <h2 className="subheading text-center">{Complated_Data.subheading}</h2>
                    <p className="text-p text-center mt-3 mb-3">{Complated_Data.title}</p>
                    <Button variant="default" className="primary-btn" type="submit">{Complated_Data.button}</Button>
                </div>
            </div>
            <AddBanner path="/1234/travel/asia/food" id="banner2" Width={200} Height={100} />
            <ScoreTable />
            <Button variant="default" className="primary-btn max-350 mt-3 mb-3" type="submit">{Complated_Data.button}</Button>
            <AddBanner path="/1234/travel/asia/food" id="banner2" Width={200} Height={100} />
            <CustomAd src={Add} link="/about" alt="custom add" />
        </React.Fragment>
    )
}

export default Completed; 