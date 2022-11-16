import React, {useState} from "react";
import AddBanner from "../../component/Addbanner";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.jpeg";
import Options from "../../component/Options";
import Questions from "../../assets/js/questions";
import { useHistory } from "react-router-dom";




const Question = () => {
    const [cureent, setCurrent] = useState({userD : [], count : 0});
    let history = useHistory();
    let userObjJson = JSON.stringify(cureent.userD);
    // let Cookies = new Cookies();

    const skipHandler = () => {
        setCurrent(pre => ({
                    ...pre, count : pre.count+1   
        }))
    }
    
    // let answers = {
    //     q1: null,
    //     q2: null,
    //     q3: null,
    //     q4: null,
    // }

    sessionStorage.setItem("userAns", userObjJson);
    const ansHandler = (item) => {
        let CurrentVal = item.target.innerText;
        let getCurrentArr = Questions[cureent.count];
        getCurrentArr.userAns = CurrentVal;
        item.currentTarget.classList.add("active");
        let newUserAns = cureent.userD.concat(getCurrentArr);
        setTimeout(() => {
            setCurrent(pre => ({
                userD: newUserAns, count : pre.count+1   
            }));
        }, 500)
        
    }

    if(cureent.userD.length > 9){
        setTimeout(() => {
            history.push("/share");
          }, 500);
    }
   
   
    return (
        <>
            <AddBanner path="/1234/travel/asia/food" id="banner1" Width={200} Height={200} />
            <div className="question-content max-390 m-auto">
                <div className="question-btn">
                    <span className={(cureent.userD.length > 0) && "active"}>1</span>
                    <span className={(cureent.userD.length > 1) && "active"}>2</span>
                    <span className={(cureent.userD.length > 2) && "active"}>3</span>
                    <span className={(cureent.userD.length > 3) && "active"}>4</span>
                    <span className={(cureent.userD.length > 4) && "active"}>5</span>
                    <span className={(cureent.userD.length > 5) && "active"}>6</span>
                    <span className={(cureent.userD.length > 6) && "active"}>7</span>
                    <span className={(cureent.userD.length > 7) && "active"}>8</span>
                    <span className={(cureent.userD.length > 8) && "active"}>9</span>
                    <span className={(cureent.userD.length > 9) && "active"}>10</span>
                </div>
                <div className="question-sec text-center">
                    <p className="question">{Questions[cureent.count].user_text}</p>
                    <button className="btn m-auto skip-btn" onClick={skipHandler}>Skip</button>
                    <div className={(Questions[cureent.count].type === "media") ? "grid-line-ans" : "single-line-ans"}>
                           {Questions[cureent.count].options.map((items) => {
                                return (
                                    Object.values(items).map((cureentOption) => {
                                        return (
                                            <Options type={Questions[cureent.count].type} activeClass="1"  userAnswer={cureentOption.text} userAnsImg={cureentOption.image} onClick={ansHandler} />
                                        )
                                    })
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

export default Question;