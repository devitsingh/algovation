import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    return (
        <React.Fragment>
            <div className="loader-center">
                <Spinner animation="grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </React.Fragment>
    )
}

export default Loader;