import React from "react";

const Options = (props) => {
    return (
        <React.Fragment>
                            <div dataId={props.key} className={(props.type === "media") ? `GridCard ${(props.currectVal !=="") ? (props.currectVal === props.ansId) ? (props.ansVal !== props.currectVal) ? 'Incorrect' : '' : '' : ''} ${(props.ansVal !== "") ? (props.ansVal === props.ansId) ? "correctAns" : '' : '' } ${props.currectAns} ${(props.activeClass === props.optionId) ? `active` : ``}` : `SingleCard ${(props.currectVal !=="") ? (props.currectVal === props.ansId) ? (props.ansVal !== props.currectVal) ? 'Incorrect' : '' : '' : ''} ${(props.ansVal !== "") ? (props.ansVal === props.ansId) ? "correctAns" : '' : '' } ${(props.activeClass === props.optionId) ? `active` : ``}`} optionid={props.optionId} onClick={props.onClick}>
                                        {  (props.type === "media") ? <img src={props.userAnsImg} className="answerImg" /> : ""}      
                                        <div className="CardTxt">{props.userAnswer}</div>
                            </div>
        </React.Fragment>
    )
}

export default Options;