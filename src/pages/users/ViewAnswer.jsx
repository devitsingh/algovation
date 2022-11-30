import React, { useState } from "react";
import AddBanner from "../../component/Addbanner";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.png";
import { ViewAnsCard } from "../../component/ViewAnsCard";
import Button from 'react-bootstrap/Button';
import UserDelModal from "../../component/UserDelModal";
import { Link } from "react-router-dom";
import Question from "../../assets/js/questions";


const ViewAnswer = () => {
    const [modalShow, setModalShow] = useState(false);
    // const [options, setOption] = useState();
    let quesId = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11];


    let userAns = { q1: "id2", q3: "id7", q4: "id10", q5: "id11", q6: "id13", q7: "id16", q8: "id18", q9: "id19", q10: "id21", q11 : "id23"}
    let frnsAns = { q1: "id2", q3: "id7", q4: "id9", q5: "id11", q6: "id14", q7: "id16", q8: "id18", q9: "id19", q10: "id21", q11 : "id23"}

    let filterQes = [];
    Question.find(question => {
        quesId.map(qid => {
            if (question.id === qid) {
                filterQes.push(question);
            }
        })
    })
    
    
    return (
        <>
            <AddBanner path="/1234/travel/asia/food" id="banner2" Width={468} Height={100} />
            <div className="view-answer">
                <h1 className="heading mt-4">D's Answers</h1>
                <div className="ansCardSec">
                    {
                        filterQes.map(qes => {
                            // let options = qes.options.filter((rQs) => rQs.id === frnsAns[`q${qes.id}`]);
                            
                            return (
                                <div className="viewAnsCard text-center">
                                
                                    <span className="viewansCount">{qes.id}</span>
                                    <h2 className="subheading text-center mb-3">{qes.user_text}</h2>
                                    <ViewAnsCard mediaType={qes.type}  optionVals={qes.options.filter((rQs) => rQs.id === frnsAns[`q${qes.id}`])[0]} anstype={(userAns[`q${qes.id}`] === frnsAns[`q${qes.id}`]) ? "correct" : "Incorrect"} />
                                </div>
                            )
                        })
                    }

                </div>

                <Link to="/share" className="primary-btn mt-3" onClick={() => setModalShow(true)}>BACK</Link>
                <Button variant="default" className="primary-btn max-196 mt-3 mb-3" onClick={() => setModalShow(true)}>DELETE</Button>

                <UserDelModal show={modalShow}
                    onHide={() => setModalShow(false)} />
            </div>
            <CustomAd src={Add} link="/about" alt="custom add" />
        </>
    )
}

export default ViewAnswer;