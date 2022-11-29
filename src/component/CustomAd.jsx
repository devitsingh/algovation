import React from "react";

class CustomAd extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="custom-ad">
                    <a href={this.props.link} className="custom-ad-link">
                        <img src={this.props.src} alt={this.props.alt} />
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default CustomAd;