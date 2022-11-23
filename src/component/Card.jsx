import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <React.Fragment>
            <div className="main-content-sec text-center">
                <h2 className="text-center mb-6">{props.heading}</h2>
                <Link to={props.link} className="btn primary-btn">{props.Button}</Link>
            </div>
        </React.Fragment>
    )
}
export default Card;