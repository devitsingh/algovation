import React from "react";
import AddBanner from "../../component/Addbanner";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.png";
import Options from "../../component/Options";
import apis from "../../assets/js/api";




class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            Questions: [],
            Answer: [],
            ActiveOption: "",
            CurrentQesId: ""
        })
    }

    componentDidMount = () => {
        const apiUrl = apis.question;
        fetch(apiUrl)
            .then((result) => result.json())
            .then((result) => {
                this.setState({ Questions: result })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    skipHandler = (cQus) => () => {
        setTimeout(() => {
            let removeItem = this.state.Questions.filter((rQs) => rQs.id !== cQus.id);
            removeItem.push(cQus);
            this.setState({ Questions: removeItem });
        }, 0)
    }

    ansHandler = (oId, cQue) => () => {
        this.state.Answer[`q${cQue}`] = oId;
        let filterData = this.state.Questions.filter((rQs) => rQs.id !== cQue);
        setTimeout(() => {
            this.setState({ Questions: filterData })
        }, 500);
        this.setState({ ActiveOption: oId, CurrentQesId: cQue })
    }


    render() {
        let currentQuestion = this.state.Questions[0];
        if (currentQuestion !== undefined) {
            let opSort = [...currentQuestion.options].sort((a, b) => a.order - b.order);


            let answerLen = (Object.keys(this.state.Answer).length);
            if (answerLen === 10) {
                setTimeout(() => {
                    this.props.history.push('/share');
                }, 500);
            }

            return (
                <React.Fragment>

                    <AddBanner path="/1234/travel/asia/food" id="banner1" Width={200} Height={200} />
                    <div className="question-content max-390 m-auto">
                        <div className="question-btn">
                            <span className={(answerLen > 0) && "active"}>1</span>
                            <span className={(answerLen > 1) && "active"}>2</span>
                            <span className={(answerLen > 2) && "active"}>3</span>
                            <span className={(answerLen > 3) && "active"}>4</span>
                            <span className={(answerLen > 4) && "active"}>5</span>
                            <span className={(answerLen > 5) && "active"}>6</span>
                            <span className={(answerLen > 6) && "active"}>7</span>
                            <span className={(answerLen > 7) && "active"}>8</span>
                            <span className={(answerLen > 8) && "active"}>9</span>
                            <span className={(answerLen > 9) && "active"}>10</span>
                        </div>
                        <div className="question-sec text-center">
                            <p className="question">{currentQuestion.user_text}</p>

                            <div className={(currentQuestion.type === "media") ? "grid-line-ans" : "single-line-ans"}>
                                {

                                    opSort.map((option) => {
                                        return (
                                            <Options key={option.id} type={currentQuestion.type} activeClass={this.state.ActiveOption} optionId={option.id} userAnswer={option.text} srcImg={""} CQesID={currentQuestion.id} qId={this.state.CurrentQesId} onClick={this.ansHandler(option.id, currentQuestion.id)} ansVal="" currectVal="" />

                                        )

                                    })
                                }
                            </div>
                            <button className="btn m-auto skip-btn" onClick={this.skipHandler(currentQuestion)}>Skip</button>
                        </div>

                    </div>
                    <AddBanner path="/1234/travel/asia/food" id="banner2" Width={200} Height={100} />
                    <CustomAd src={Add} link="/about" alt="custom add" />
                </React.Fragment>
            )
        }
    }
}




export default Question