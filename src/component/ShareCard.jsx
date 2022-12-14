import React from "react";
import Button from 'react-bootstrap/Button';
import { ShareButton } from "./ShareButton";
import whatsapp from "../assets/img/whatsapp.png";
import facebook from "../assets/img/facebookS.png";
import twitter from "../assets/img/twitterS.png";
import messanger from "../assets/img/messanger.png";
import snap from "../assets/img/snap.png";
import insta from "../assets/img/instaS.png";
import line from "../assets/img/line.png";
import talk from "../assets/img/talk.png";
import vk from "../assets/img/vk.png";

export class ShareCard extends React.Component {
    constructor(props){
            super(props)
            this.myRef = React.createRef();
    }

    copyToClipboard = () => () => {
            this.myRef.current.select();
            document.execCommand('copy');
    }

    render() {
        return (
            <React.Fragment>
                <div className="shareCom">
                    <div className="copySec">
                        <textarea className="copyInput" readOnly="yes" ref={this.myRef}>{this.props.link}</textarea>
                        <Button variant="default" className="primary-btn max-196" type="submit" onClick={this.copyToClipboard()}>{this.props.button}</Button>
                        {
                            // <p className="text-center">{copySuccess}</p>
                        }
                    </div>
                    <div className="shareGrid">
                        <ShareButton src={whatsapp} ShareType="whatsapp" text="Share" />
                        <ShareButton src={facebook} ShareType="fb" text="Share" />
                        <ShareButton src={twitter} ShareType="twitter" text="Share" />
                        <ShareButton src={messanger} ShareType="messanger" text="Share" />
                        <ShareButton src={snap} ShareType="snap" text="Share" />
                        <ShareButton src={insta} ShareType="insta" text="Share" />
                        <ShareButton src={line} ShareType="line" text="Share" />
                        <ShareButton src={talk} ShareType="talk" text="Share" />
                        <ShareButton src={vk} ShareType="vk" text="Share" />
                    </div>

                </div>
            </React.Fragment>
        )
    }

}

export default ShareCard;