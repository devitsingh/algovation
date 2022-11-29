import React from "react";
import AddBanner from "../../component/Addbanner";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.png";
import Options from "../../component/Options";
import Questions from "../../assets/js/questions";


class Answer extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            Question: Questions,
            frAns: {},
            CurrentVal: "",
            CoptionVal: "",
        })
    }

    ansHandler = (opId, cQid, userAnswer) => () => {
        this.state.frAns[`q${cQid}`] = opId;
        this.setState({ CoptionVal: userAnswer[`q${cQid}`], CurrentVal: opId });
        setTimeout(() => {
            this.setState({ Question: this.state.Question.filter((Qes) => Qes.id !== cQid) });
        }, 1000)
    }


    
    render() {
        let frQuestion = this.state.Question[0];
        let userAns = { q1: "id1", q2: "id3", q3: "id6", q4: "id7", q5: "id9", q6: "id11", q7: "id14", q8: "id16", q9: "id18", q10: "id20", }
        let opSort = [...frQuestion.options].sort((a, b) => a.order - b.order);
        let answerLen = (Object.keys(this.state.frAns).length);
        if (answerLen === 10) {
            setTimeout(() => {
                this.props.history.push('/Completed');
            }, 500);
        }
        console.log(this.state.frAns[`q${frQuestion.id}`] !== undefined ? this.state.frAns[`q${frQuestion.id}`] : "undefined");
        return (
            <React.Fragment>
                <AddBanner path="/1234/travel/asia/food" id="banner1" Width={200} Height={200} />
                <div className="question-content max-390 m-auto">
                    <div className="question-btn">
                        <span className={(answerLen > 0) && 'active'}>1</span>
                        <span className={(answerLen > 1) && 'active'}>2</span>
                        <span className={(answerLen > 2) && 'active'}>3</span>
                        <span className={(answerLen > 3) && 'active'}>4</span>
                        <span className={(answerLen > 4) && 'active'}>5</span>
                        <span className={(answerLen > 5) && 'active'}>6</span>
                        <span className={(answerLen > 6) && 'active'}>7</span>
                        <span className={(answerLen > 7) && 'active'}>8</span>
                        <span className={(answerLen > 8) && 'active'}>9</span>
                        <span className={(answerLen > 9) && 'active'}>10</span>
                    </div>
                    <div className="question-sec text-center">
                        <p className="question">{frQuestion.user_text}</p>
                        <div className={(frQuestion.type === "media") ? "grid-line-ans" : "single-line-ans"}>
                            {opSort.map((option) => {
                                return (
                                    <Options type={frQuestion.type} key={option.id} activeClass="" state="" currectVal={this.state.CurrentVal} ansVal={this.state.CoptionVal} ansId={option.id} userAnswer={option.text} userAnsImg={option.image} onClick={this.ansHandler(option.id, frQuestion.id, userAns)} />
                                )
                            })
                            }
                        </div>
                    </div>

                </div>
                <AddBanner path="/1234/travel/asia/food" id="banner2" Width={200} Height={100} />
                <CustomAd src={Add} link="/about" alt="custom add" />
            </React.Fragment>
        )
    }
}

export default Answer;