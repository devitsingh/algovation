import React from "react";
import Img4 from "../assets/img/img4.jpeg";
import MediaWrongAns from "../assets/img/mediaWrongAns.png";
import MediaRightAns from "../assets/img/mediaRightAns.png";
import worngAns from "../assets/img/worngAns.png";
import rightAns from "../assets/img/rightAns.png";


export const ViewAnsCard = (props) => {
        return(
                <React.Fragment>
                                <div className={(props.mediaType === "media") ? `viewAnsGridcard ${(props.anstype === `correct` ? 'vAnsCorrect' : `vAnsInCorrect`)}` : `viewAnsSinglecard ${(props.anstype === `correct` ? 'vAnsCorrect' : `vAnsInCorrect`)}`}>
                                        {(props.mediaType === "media") ? <div className="viewAnsImgSec"><img src={Img4} alt="view answer grid img" /></div> : ''}
                                        <div className={`viewansTxt ${(props.mediaType === "media") ? `viewansGridTxt` : ``}`}>
                                                Vanilla
                                                {
                                                   (props.mediaType !== "media") ? 
                                                        (props.anstype === `correct`) ?
                                                                <img src={rightAns} alt="user selected" className="txtAnsImg" />
                                                        :
                                                                <img src={worngAns} alt="user selected" className="txtAnsImg" />
                                                    :
                                                       ''                    
                                                           
                                                }
                                        </div>
                                        
                                        {
                                                // media type active case
                                                (props.mediaType === "media") ? 
                                                        <div className="viewAnsOverlay">
                                                                {     (props.anstype === `correct`) ? 
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


