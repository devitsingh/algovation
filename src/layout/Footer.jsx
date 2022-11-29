import React, { useState } from "react";
import Insta from "../assets/img/insta.png";
import Twitter from "../assets/img/twitter.png";
import Facebook from "../assets/img/facebook.png";
import LanguageModal from "../component/LanguageModal";
import Button from 'react-bootstrap/Button';


class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            modalShow: false
        })
    }
    render() {
        return (
            <React.Fragment>
                <footer className="footer-sec text-center">
                    <div className="footer-links">
                        <a href="" className="footer-link">
                            FAQ’s
                        </a>
                        <a href="" className="footer-link">
                            Contact Us
                        </a>
                        <a href className="footer-link" onClick={() => this.setState({modalShow : true})}>
                            Language
                        </a>
                    </div>
                    <div className="social-media">
                        <a href="" className="social-icon">
                            <img src={Twitter} alt="twitter" />
                        </a>
                        <a href="" className="social-icon">
                            <img src={Facebook} alt="facebook" />
                        </a>
                        <a href="" className="social-icon">
                            <img src={Insta} alt="instagram" />
                        </a>

                    </div>
                    <p className="footer-text mt-2">DISCLAIMER: ALL CONTENT IS PROVIDED FOR FUN AND ENTERTAINMENT PURPOSES ONLY</p>
                    <p className="footer-copyright mb-4"> © 2022 HEYMATES ALL RIGHTS RESERVED</p>
                    <LanguageModal show={this.state.modalShow}
                        onHide={() => this.setState({modalShow : false})} />
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;