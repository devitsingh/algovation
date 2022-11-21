import React, {useState} from "react";
import userSelected from "../assets/img/user-check-icon.png";
import userTypeTxt from "../assets/img/text-ans-check.png";

const Options = (props) => {
    const [imgSrc, setImgSrc] = useState(props.userAnsImg);

    return (
        <React.Fragment>
                            <div dataId={props.key} className={(props.type === "media") ? `GridCard ${(props.currectVal !=="") ? (props.currectVal === props.ansId) ? (props.ansVal !== props.currectVal) ? 'Incorrect' : '' : '' : ''} ${(props.ansVal !== "") ? (props.ansVal === props.ansId) ? "correctAns" : '' : '' } ${props.currectAns} ${(props.activeClass === props.optionId) ? `active` : ``}` : `SingleCard ${(props.currectVal !=="") ? (props.currectVal === props.ansId) ? (props.ansVal !== props.currectVal) ? 'Incorrect' : '' : '' : ''} ${(props.ansVal !== "") ? (props.ansVal === props.ansId) ? "correctAns" : '' : '' } ${(props.activeClass === props.optionId) ? `active` : ``}`} optionid={props.optionId} onClick={props.onClick}>
                                        {  (props.type === "media") ? <div className="mediaImg"><img src={imgSrc} onError = {() => setImgSrc("https://picsum.photos/200")} className="answerImg" /></div> : ""}      
                                        <div className={`CardTxt ${(props.type !== "media") ? 'cardTxtType' : ''}` }>{props.userAnswer}
                                            {
                                                (props.type !== "media") ? <img src={userTypeTxt} className="userTypeImg" /> : ""
                                            }
                                        </div>
                                        {
                                            // user side media type question active
                                        }
                                        {  (props.type === "media") ?
                                            <div className="userSelectedM">
                                                    <img src={userSelected} alt="" />
                                            </div>
                                            :
                                            ""
                                        }


                            </div>
        </React.Fragment>
    )
}

export default Options;