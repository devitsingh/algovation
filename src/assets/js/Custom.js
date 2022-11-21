import React, {useState} from "react";
import apis from "../../assets/js/api";
import axios from "axios";

let Qdata ;
 async function fetchData(apiUrl){
    try{
        const response = await axios.get(apiUrl);
        // setData(response.data);
        Qdata = response.data;
    }
    catch(error){
            return [];
    }


}

console.log(Qdata);

export default fetchData(apis.question);
