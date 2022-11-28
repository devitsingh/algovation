import React, { useState } from "react";
import AddBanner from "../../component/Addbanner";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.png";
import Options from "../../component/Options";
import { useHistory } from "react-router-dom";
import Questions from "../../assets/js/questions";


const Answer = () => {
    let history = useHistory();
    let [qes, setQes] = useState(Questions);
    let [frAns, setFrAns] = useState({});
    let [currentVal, setCurrentVal] = useState("");
    let [correctVal, setCorrectVal] = useState("");
    let frCurQus = qes[0];
    let opSort = [...frCurQus.options].sort((a, b) => a.order - b.order);
    let userAns = {
        q1 : "id1",
        q2 : "id3",
        q3 : "id6",
        q4 : "id7",
        q5 : "id9",
        q6 : "id11",
        q7 : "id14",
        q8 : "id16",
        q9 : "id18",
        q10 : "id20",
    }
    const ansHandler = (opId, cQid) => {
        frAns[`q${cQid}`] = opId;
        setCorrectVal(userAns[`q${cQid}`]);
        setCurrentVal(opId);
        setTimeout(() => {
                setQes((cQes) => cQes.filter((Qes) => Qes.id !== cQid));
        }, 1000); 
    }
    let answerLen = (Object.keys(frAns).length);
    setTimeout(() => {
        if(answerLen === 10){
            history.push("/completed");
        }
    }, 1000)
    

    return (
        <>
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
                    <p className="question">{frCurQus.user_text}</p>
                    <div className={(frCurQus.type === "media") ? "grid-line-ans" : "single-line-ans"}>
                        { opSort.map((option) => {
                                return (
                                    <Options type={frCurQus.type} key={option.id} activeClass="" state="" currectVal ={currentVal} ansVal= {correctVal}  ansId={option.id} userAnswer={option.text} userAnsImg={option.image} onClick={() => ansHandler(option.id, frCurQus.id)} />  
                                )
                            })
                        }
                    </div>
                </div>

            </div>
            <AddBanner path="/1234/travel/asia/food" id="banner2" Width={200} Height={100} />
            <CustomAd src={Add} link="/about" alt="custom add" />

        </>
    )
}

export default Answer;