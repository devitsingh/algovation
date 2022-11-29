import React from "react";
import Button from 'react-bootstrap/Button';

export class ShareButton extends React.Component {
        render() {
                return (
                        <React.Fragment>
                                <Button variant="default" className={"btn shareBtn " + this.props.ShareType} type="submit">
                                        <a href="" className="shareLink">
                                                <img src={this.props.src} className="ShareImg" />
                                                <span className="ShareTxt">{this.props.text}</span>
                                        </a>
                                </Button>
                        </React.Fragment>
                )
        }
}



