import React from "react";

const ScoreItem = (props) => {
    return (
        <React.Fragment>
            <div className="scoreItem">
                <div className="scorerName">
                    <a href={props.viewAnswerLink} className="scorerLink">{props.scorerName}</a>
                </div>
                <div className="scoreCounter">
                    <div className="scoreStepSec">
                        <span className={`scoreStep ${(props.score > 0) && 'active'}`}></span>
                        <span className={`scoreStep ${(props.score > 1) && 'active'}`}></span>
                        <span className={`scoreStep ${(props.score > 2) && 'active'}`}></span>
                        <span className={`scoreStep ${(props.score > 3) && 'active'}`}></span>
                        <span className={`scoreStep ${(props.score > 4) && 'active'}`}></span>
                        <span className={`scoreStep ${(props.score > 5) && 'active'}`}></span>
                        <span className={`scoreStep ${(props.score > 6) && 'active'}`}></span>
                        <span className={`scoreStep ${(props.score > 7) && 'active'}`}></span>
                        <span className={`scoreStep ${(props.score > 8) && 'active'}`}></span>
                        <span className={`scoreStep ${(props.score > 9) && 'active'}`}></span>
                    </div>
                    <div className="scoreCount">{props.score}/10</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ScoreItem;