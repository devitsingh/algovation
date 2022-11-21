import React, {useState, useEffect} from "react";
import AddBanner from "../../component/Addbanner";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.jpeg";
import Options from "../../component/Options";
import Questions from "../../assets/js/questions";
import { useHistory } from "react-router-dom";
import axios from "axios";
import apis from "../../assets/js/api";





const Question = () => {


   // api call 
    const [cQest, setCQest] = useState("");
    useEffect(() => {
                    gQuestion(apis.question);  
    }, [])
    const gQuestion  = (apiUrl)  => {
        axios.get(apiUrl)
        .then((response) => {
                    const questionArr = response.data;
                    setCQest(questionArr);
        })
        .catch((error) => {
            console.log(error);
        }) 
    } 
    
    
    let history = useHistory();
    let [activeOp, setActionOp] =  useState();
    const [question, setQuestion] = useState(Questions);
    const [answer, setAnswer] = useState({});
    let currentQuestion = question[0];
    let opSort = [...currentQuestion.options].sort((a, b) => a.order - b.order);
    const skipHandler = (cQus) => {
        setTimeout(() => {
            let removeItem = question.filter((rQs) => rQs.id !== cQus.id);
            removeItem.push(cQus);
            setQuestion(removeItem);
        }, 500) 
    }

    const ansHandler= (qId, cQue) => {
        answer[`q${cQue}`] = qId;
        setTimeout(() => {
            setQuestion((rQes) => rQes.filter((rQs) => rQs.id !== cQue));
        }, 500)
        setActionOp(qId);
    }

    let answerLen = (Object.keys(answer).length);

    if(answerLen === 10){
        setTimeout(() => {
            history.push("/share");
          }, 500);
    }
    
    
   
   
    return (
        <>
           
            <AddBanner path="/1234/travel/asia/food" id="banner1" Width={200} Height={200} />
            {(cQest !== "") ?
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
                    <button className="btn m-auto skip-btn" onClick={() => skipHandler(currentQuestion)}>Skip</button>
                    <div className={(currentQuestion.type === "media") ? "grid-line-ans" : "single-line-ans"}>
                           {
                            opSort.map((option) => {
                                        return (
                                            <Options key={option.id} type={currentQuestion.type}  activeClass={activeOp} optionId ={option.id}  userAnswer={option.text} userAnsImg={option.image} onClick={() => ansHandler(option.id, currentQuestion.id)} ansVal="" currectVal="" />
                                        )
                                    })
                        }
                    </div>
                </div>

            </div>
             :
            <div className="loaderSec">
                    <div class="spinner-grow text-success" role="status"> </div>
            </div>
            }
            <AddBanner path="/1234/travel/asia/food" id="banner2" Width={200} Height={100} />
            <CustomAd src={Add} link="/about" alt="custom add" />
        </>
    )
}

export default Question;