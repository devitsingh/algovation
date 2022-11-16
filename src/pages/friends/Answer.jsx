import React, {useState} from "react";
import AddBanner from "../../component/Addbanner";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.jpeg";
import Options from "../../component/Options";
import { useHistory } from "react-router-dom";


const Answer = () => {
    let history = useHistory();
    const [cureent, setCurrent] = useState({userD : [], count : 0});
    let userAnsD = JSON.parse(sessionStorage.getItem("userAns")); 
   
    console.log(userAnsD.length);
    const ansHandler = (item) => {
        let CurrentVal = item.target.innerText;
        let getCurrentArr = userAnsD[cureent.count];
        getCurrentArr.userAns = CurrentVal;
        let newUserAns = cureent.userD.concat(getCurrentArr);
        setCurrent(pre => ({
            userD: newUserAns, count : pre.count+1   
        }));
    }
    if(cureent.userD.length > 9){
        history.push("/completed");
    }
    return (
        <>
            <AddBanner path="/1234/travel/asia/food" id="banner1" Width={200} Height={200} />
            <div className="question-content max-390 m-auto">
                <div className="question-btn">
                    <span className="active">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>
                <div className="question-sec text-center">
                    <p className="question">{userAnsD[cureent.count].user_text}</p>
                    <div className={(userAnsD[cureent.count].type === "media") ? "grid-line-ans" : "single-line-ans"}>
                            {userAnsD[cureent.count].options.map((items) => {
                                return (
                                    Object.values(items).map((cureentOption) => {
                                        return (
                                            <Options type={userAnsD[cureent.count].type} activeClass="1"  userAnswer={cureentOption.text} userAnsImg={cureentOption.image} onClick={ansHandler} />
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

export default Answer;