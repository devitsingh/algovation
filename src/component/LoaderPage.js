import React from "react";
import LoaderGif from "../assets/img/loading-43.gif";

export class ShareLoader extends React.Component {
    render(){
        return(
                        <React.Fragment>
                        <div className="share-loader">
                                    <img src={LoaderGif} className="share-loader-gif" />
                                    <p className="share-loader-txt">Huraah! <br/> Your score is loading!</p>
                        </div>
            </React.Fragment>
         )
    }
}   

export class ComplatedLoader extends React.Component {
    render(){
        return (
            <React.Fragment>
                    <div className="complated-loader">
                            <img src={LoaderGif} className="complated-loader-gif" />
                            <p className="complated-loader-txt">Huraah! <br/> Your score is loading!</p>
                    </div>
            </React.Fragment>
        )
    }
}