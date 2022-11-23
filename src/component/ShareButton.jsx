import React from "react";
import Button from 'react-bootstrap/Button';

export const ShareButton = (props) => {
        return(
                    <React.Fragment>
                                    <Button variant="default"  className={"btn shareBtn " + props.ShareType} type="submit">
                                            <a href="" className="shareLink">
                                                    <img src={props.src} className="ShareImg" />
                                                    <span className="ShareTxt">{props.text}</span>
                                            </a>    
                                    </Button>
                    </React.Fragment>
        )      
}



