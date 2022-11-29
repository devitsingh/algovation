import React from "react";
import Img4 from "../assets/img/img4.jpeg";
import MediaWrongAns from "../assets/img/mediaWrongAns.png";
import MediaRightAns from "../assets/img/mediaRightAns.png";
import worngAns from "../assets/img/worngAns.png";
import rightAns from "../assets/img/rightAns.png";


export class ViewAnsCard extends React.Component {
        render() {
                return (
                        <React.Fragment>
                                <div className={(this.props.mediaType === "media") ? `viewAnsGridcard ${(this.props.anstype === `correct` ? 'vAnsCorrect' : `vAnsInCorrect`)}` : `viewAnsSinglecard ${(this.props.anstype === `correct` ? 'vAnsCorrect' : `vAnsInCorrect`)}`}>
                                        {(this.props.mediaType === "media") ? <div className="viewAnsImgSec"><img src={Img4} alt="view answer grid img" /></div> : ''}
                                        <div className={`viewansTxt ${(this.props.mediaType === "media") ? `viewansGridTxt` : ``}`}>
                                                {this.props.optionText}
                                                {
                                                        (this.props.mediaType !== "media") ?
                                                                (this.props.anstype === `correct`) ?
                                                                        <img src={rightAns} alt="user selected" className="txtAnsImg" />
                                                                        :
                                                                        <img src={worngAns} alt="user selected" className="txtAnsImg" />
                                                                :
                                                                ''

                                                }
                                        </div>

                                        {
                                                // media type active case
                                                (this.props.mediaType === "media") ?
                                                        <div className="viewAnsOverlay">
                                                                {(this.props.anstype === `correct`) ?
                                                                        <img src={MediaRightAns} alt="correct ans" />
                                                                        :
                                                                        <img src={MediaWrongAns} alt="Incorrect ans" />
                                                                }
                                                        </div>
                                                        :
                                                        ''

                                        }
                                </div>
                        </React.Fragment>
                )
        }
}


