import React from "react";

const Options = (props) => {
    return (
        <React.Fragment>
                            <div className={(props.type === "media") ? `GridCard` : `SingleCard`} active={props.activeClass} onClick={props.onClick}>
                                        {  (props.type === "media") ? <img src={props.userAnsImg} className="answerImg" /> : ""}      
                                        <div className="CardTxt">{props.userAnswer}</div>
                            </div>
        </React.Fragment>
    )
}

export default Options;