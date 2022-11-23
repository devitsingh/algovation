import React, {useState} from "react";
import userSelected from "../assets/img/user-check-icon.png";
import userTypeTxt from "../assets/img/text-ans-check.png";
import MediaWrongAns from "../assets/img/mediaWrongAns.png";
import MediaRightAns from "../assets/img/mediaRightAns.png";
import worngAns from "../assets/img/worngAns.png";
import rightAns from "../assets/img/rightAns.png";

const Options = (props) => {
    const [imgSrc, setImgSrc] = useState(props.userAnsImg);

    return (
        <React.Fragment>
                            <div dataId={props.key} className={(props.type === "media") ? `GridCard ${(props.currectVal !=="") ? (props.currectVal === props.ansId) ? (props.ansVal !== props.currectVal) ? 'Incorrect' : '' : '' : ''} ${(props.ansVal !== "") ? (props.ansVal === props.ansId) ? "correctAns" : '' : '' } ${props.currectAns} ${(props.activeClass === props.optionId) ? `active` : ``}` : `SingleCard ${(props.currectVal !=="") ? (props.currectVal === props.ansId) ? (props.ansVal !== props.currectVal) ? 'Incorrect' : '' : '' : ''} ${(props.ansVal !== "") ? (props.ansVal === props.ansId) ? "correctAns" : '' : '' } ${(props.activeClass === props.optionId) ? `active` : ``}`} optionid={props.optionId} onClick={props.onClick}>
                                        {  (props.type === "media") ? <div className="mediaImg"><img src={imgSrc} onError = {() => setImgSrc("https://picsum.photos/200")} className="answerImg" /></div> : ""}      
                                        <div className={`CardTxt ${(props.type !== "media") ? 'cardTxtType' : ''}` }>{props.userAnswer}
                                            {
                                                (props.type !== "media") ?
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
                                        {  (props.type === "media") ?
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
    )
}

export default Options;