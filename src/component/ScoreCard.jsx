import React from "react";
import Gmadle from "../assets/img/medals-0.png";
import ScoreItem from "./ScoreItm";

export class ScoreCard extends React.Component {
        render(){
            return (
                <React.Fragment>
                    <div className="scoreBoard">
                                <h2 className="subheading mb-4 text-center">SCOREBOARD</h2>
                                <div className="scoreCard">
                                        <div className="scoreErrorCard">
                                                    <p className="text-p">{this.props.errortext}</p>
                                        </div>
                                </div>
                    </div>
                </React.Fragment>
            )
        }
}


export class ScoreTable extends React.Component{
        render(){
            return (
                <React.Fragment>
                <div className="scoreBoard">
                        <h2 className="subheading mb-4 text-center">SCOREBOARD</h2>
                        <div className="scoreCard">
                                    <ScoreItem score="5" scorerName="Devit Singh" viewAnswerLink="d" />  
                                    <ScoreItem score="8" scorerName="Utkarsh Singhal" viewAnswerLink="d" />  
                                    <ScoreItem score="7" scorerName="Yasin" viewAnswerLink="d" /> 
                                    <p className="scoreTitle">Click on the name to view the user’s answers</p>   
                        </div>
                        
                </div>
                </React.Fragment>
            )
        }
}