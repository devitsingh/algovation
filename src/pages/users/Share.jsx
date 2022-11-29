import React from "react";
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




class Share extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            isShowScore: false,
            loader: false,
            modalShow: false
        })
    }

    scoreHandler = () => () => {
        this.setState({ isShowScore: true })
    }

    render() {
        let Share_Data = data.Share;
        setTimeout(() => {
            this.setState({ loader: true });
        }, 1000);
        if (this.state.loader === true) {
            return (
                <React.Fragment>
                    <div className="share-content text-center">
                        <h1 className="heading mb-3">{Share_Data.heading}</h1>
                        <img src={ShareGif} alt="share gif img" className="shareImg" />
                        <div className="shareTitle">{Share_Data.subtitle}</div>
                        <ShareCard link={Share_Data.copyLink} button={Share_Data.button} title={Share_Data.subtitle} />
                        {(this.state.isShowScore === false) ? <Button variant="default" className="primary-btn" onClick={this.scoreHandler()}>SCOREBOARD</Button> : ""}
                        {(this.state.isShowScore === true) ? (Share_Data.scoreboard.type === 1) ? <ScoreTable /> : <ScoreCard errortext={Share_Data.scoreboard.error} /> : ''}
                        {(this.state.isShowScore === true) ? <Button variant="default" className="primary-btn max-196 mt-3" onClick={() => this.setState({ modalShow: true })}>DELETE</Button>
                            : ''}
                    </div>
                    <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
                    <CustomAd src={Add} link="/about" alt="custom add" />
                    <UserDelModal show={this.state.modalShow}
                        onHide={() => this.setState({ modalShow: false })} />
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    <ShareLoader />
                </React.Fragment>
            )
        }

    }
}

export default Share;