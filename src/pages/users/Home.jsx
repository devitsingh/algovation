import React from "react";
import CustomAd from "../../component/CustomAd";
import Add from "../../assets/img/add.jpeg";

const Home = () => {
    return (
        <>
            <CustomAd src={Add} link="/about" alt="custom add" />
        </>
    )
}

export default Home;