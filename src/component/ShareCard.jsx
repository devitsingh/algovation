import React, {useState, useRef} from "react";
import Button from 'react-bootstrap/Button';
import { ShareButton } from "./ShareButton";
import whatsapp from "../assets/img/whatsapp.png";

export const ShareCard = (props) => {
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    const copyToClipboard = () => {
        textAreaRef.current.select();
        document.execCommand('copy');
        // e.target.focus();
        setCopySuccess('Copied!');
    }
    return (
        <React.Fragment>
                     <div className="shareCom mt-3">
                                <p className="text-p mt-2">{props.title}</p>  
                                <div className="copySec">
                                        <textarea className="copyInput mt-3 mb-3" readOnly="yes" ref={textAreaRef}>{props.link}</textarea>
                                        <Button variant="default"  className="primary-btn" type="submit" onClick={copyToClipboard}>{props.button}</Button>
                                        <p className="text-center">{copySuccess}</p>
                                </div>
                                <div className="shareGrid">
                                                <ShareButton src={whatsapp} ShareType="whatsapp" text="Set Status" />
                                                <ShareButton src={whatsapp} ShareType="fb" text="Share" />
                                                <ShareButton src={whatsapp} ShareType="snap" text="Snapchat" /> 
                                                <ShareButton src={whatsapp} ShareType="messanger" text="Share" /> 
                                                <ShareButton src={whatsapp} ShareType="twitter" text="Share" /> 
                                                <ShareButton src={whatsapp} ShareType="insta" text="Add to Bio" /> 
                                                <ShareButton src={whatsapp} ShareType="line" text="Share" /> 
                                                <ShareButton src={whatsapp} ShareType="talk" text="Share" /> 
                                                <ShareButton src={whatsapp} ShareType="vk" text="Share" /> 
                                </div>
                                
                     </div>
        </React.Fragment>
    )
}

export default ShareCard;