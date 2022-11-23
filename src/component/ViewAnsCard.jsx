import React from "react";
import Img4 from "../assets/img/img4.jpeg";
import { GridCard, SingleCard } from "./AnsCard";

export const ViewAnsCard = () => {
        return(
                <React.Fragment>
                                    <div className="viewAnsCard">
                                                <span className="viewansCount">1</span>
                                                <h2 className="subheading text-center mb-3">What do you like to do in your free time?</h2>
                                                <GridCard src={Img4} value="Value 1"  altMsg="Img1" activeClass="active" />
                                    </div>
                </React.Fragment>
        )
}

export const SingleAnsCard = () => {
    return(
            <React.Fragment>
                                <div className="viewAnsCard">
                                            <span className="viewansCount">2</span>
                                            <h2 className="subheading text-center mb-3">What do you like to do in your free time?</h2>
                                            <SingleCard value="Value 4" />
                                </div>
            </React.Fragment>
    )
}

