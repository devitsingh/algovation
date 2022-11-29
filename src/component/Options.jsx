import React from "react";
import userSelected from "../assets/img/user-check-icon.png";
import userTypeTxt from "../assets/img/text-ans-check.png";
import MediaWrongAns from "../assets/img/mediaWrongAns.png";
import MediaRightAns from "../assets/img/mediaRightAns.png";
import worngAns from "../assets/img/worngAns.png";
import rightAns from "../assets/img/rightAns.png";


class Options extends React.Component {
    
    render() {
       const imageOnErrorHandler = (event) => {
            event.currentTarget.src = "https://loremflickr.com/320/240"
        }
        return (
            <React.Fragment>
                <React.Fragment>
                    <div dataId={this.props.key} className={(this.props.type === "media") ? `GridCard ${(this.props.currectVal !== "") ? (this.props.currectVal === this.props.ansId) ? (this.props.ansVal !== this.props.currectVal) ? 'Incorrect' : '' : '' : ''} ${(this.props.ansVal !== "") ? (this.props.ansVal === this.props.ansId) ? "correctAns" : '' : ''}  ${(this.props.CQesID === this.props.qId) ? (this.props.activeClass === this.props.optionId) ? `active` : `` : ``}` : `SingleCard ${(this.props.currectVal !== "") ? (this.props.currectVal === this.props.ansId) ? (this.props.ansVal !== this.props.currectVal) ? 'Incorrect' : '' : '' : ''} ${(this.props.ansVal !== "") ? (this.props.ansVal === this.props.ansId) ? "correctAns" : '' : ''} ${(this.props.CQesID === this.props.qId) ? (this.props.activeClass === this.props.optionId) ? `active` : `` : ``}`} optionid={this.props.optionId} onClick={this.props.onClick}>
                        {(this.props.type === "media") ? <div className="mediaImg"><img src={this.props.srcImg} className="answerImg" onError={imageOnErrorHandler} /></div> : ""}
                        <div className={`CardTxt ${(this.props.type !== "media") ? 'cardTxtType' : ''}`}>{this.props.userAnswer}
                            {
                                (this.props.type !== "media") ?
                                    <span>
                                        <img src={userTypeTxt} className="userTypeImg" />
                                        <img src={worngAns} className="worngAns imgPosition" />
                                        <img src={rightAns} className="rightAns imgPosition" />
                                    </span> : ""
                            }
                        </div>
                        {
                            // user side media type question active
                        }
                        {(this.props.type === "media") ?
                            <div className="userSelectedM">
                                <img src={userSelected} alt="" className="userMediaSideImg" />
                                <img src={MediaWrongAns} alt="" className="mediaWrongAns" />
                                <img src={MediaRightAns} alt="" className="mediaRightAns" />
                            </div>
                            :
                            ""
                        }


                    </div>
                </React.Fragment>
            </React.Fragment>
        )
    }
}


export default Options;