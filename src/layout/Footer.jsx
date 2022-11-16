import React from "react";
import Insta from "../assets/img/insta.png";
import Twitter from "../assets/img/twitter.png";

const Footer = () => {
    return (
        <>
            <footer className="footer-sec text-center">
                <div className="social-media">
                    <a href="" className="social-icon">
                        <img src={Insta} alt="instagram" />
                    </a>
                    <a href="" className="social-icon">
                        <img src={Twitter} alt="twitter" />
                    </a>
                </div>
                <p className="footer-text mt-4">DISCLAIMER: ALL CONTENT IS PROVIDED FOR FUN AND ENTERTAINMENT PURPOSES ONLY</p>
                <p className="footer-text mb-4"> © 2022 HEYMATES ALL RIGHTS RESERVED</p>
            </footer>
        </>
    )
}

export default Footer;