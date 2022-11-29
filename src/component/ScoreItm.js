import React from "react";

class ScoreItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="scoreItem">
                    <div className="scorerName">
                        <a href={this.props.viewAnswerLink} className="scorerLink">{this.props.scorerName}</a>
                    </div>
                    <div className="scoreCounter">
                        <div className="scoreStepSec">
                            <span className={`scoreStep ${(this.props.score > 0) && 'active'}`}></span>
                            <span className={`scoreStep ${(this.props.score > 1) && 'active'}`}></span>
                            <span className={`scoreStep ${(this.props.score > 2) && 'active'}`}></span>
                            <span className={`scoreStep ${(this.props.score > 3) && 'active'}`}></span>
                            <span className={`scoreStep ${(this.props.score > 4) && 'active'}`}></span>
                            <span className={`scoreStep ${(this.props.score > 5) && 'active'}`}></span>
                            <span className={`scoreStep ${(this.props.score > 6) && 'active'}`}></span>
                            <span className={`scoreStep ${(this.props.score > 7) && 'active'}`}></span>
                            <span className={`scoreStep ${(this.props.score > 8) && 'active'}`}></span>
                            <span className={`scoreStep ${(this.props.score > 9) && 'active'}`}></span>
                        </div>
                        <div className="scoreCount">{this.props.score}/10</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ScoreItem;