import React from "react";
import Gmadle from "../assets/img/medals-0.png";
export const ScoreCard = (props) => {
    return (
        <React.Fragment>
            <div className="scoreBoard">
                <div className="scoreSvgSec">
                    <svg xmlns="http://www.w3.org/2000/svg" width="245" height="48" viewBox="0 0 245 48" fill="none" id="" class="svg d-block m-auto replaced-svg">
                        <path d="M0 0H245L220.875 38.6C217.22 44.4476 210.811 48 203.915 48H41.0849C34.1891 48 27.7798 44.4476 24.125 38.6L0 0Z" fill="#144d50"></path>
                        <text id="Scoreboard_of" data-name="Scoreboard of" transform="translate(120 28)" fill="#fff" font-size="19" font-family="Calibri-Bold, Calibri" font-weight="700"><tspan x="0" y="0" text-anchor="middle" id="board-text">Scoreboard </tspan></text>
                    </svg>
                </div>
                <p className="text-p mt-4">{props.errortext}</p>
            </div>
        </React.Fragment>
    )
}


export const ScoreTable = () => {
    return (
        <React.Fragment>
        <div className="scoreBoard">
            <div className="scoreSvgSec">
                <svg xmlns="http://www.w3.org/2000/svg" width="245" height="48" viewBox="0 0 245 48" fill="none" id="" class="svg d-block m-auto replaced-svg">
                    <path d="M0 0H245L220.875 38.6C217.22 44.4476 210.811 48 203.915 48H41.0849C34.1891 48 27.7798 44.4476 24.125 38.6L0 0Z" fill="#144d50"></path>
                    <text id="Scoreboard_of" data-name="Scoreboard of" transform="translate(120 28)" fill="#fff" font-size="19" font-family="Calibri-Bold, Calibri" font-weight="700"><tspan x="0" y="0" text-anchor="middle" id="board-text">Scoreboard </tspan></text>
                </svg>
            </div>
            <div className="scoreTable mt-4">
                            <div className="scoreTableHeader">
                                        <span>Name</span>
                                        <span>Score</span>
                            </div>
                            <div className="scoreTableBody">
                                        <div className="ScoreRow">
                                                    <div className="scoreTd">
                                                                <img src={Gmadle} className="scoreImg" />
                                                                <span>Devit Singh</span>
                                                    </div>
                                                    <div className="scoreTd">
                                                                <span>5</span>
                                                    </div>
                                        </div>
                                        <div className="ScoreRow">
                                                    <div className="scoreTd">
                                                                <img src={Gmadle} className="scoreImg" />
                                                                <span>Devit Singh</span>
                                                    </div>
                                                    <div className="scoreTd">
                                                                <span>5</span>
                                                    </div>
                                        </div>
                            </div>
            </div>
        </div>
        </React.Fragment>
    )
}