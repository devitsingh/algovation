import React from "react";

const CustomAd = (props) => {
    return (
        <>
            <div className="custom-ad">
                <a href={props.link} className="custom-ad-link">
                    <img src={props.src} alt={props.alt} />
                </a>
            </div>
        </>
    )
}

export default CustomAd;