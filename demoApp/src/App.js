import React from "react"

//import MainContent from "./components/MainContent"
//import Header from "./components/Header"
//import Footer from "./components/Footer"

function App()
{
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const styles = {
        color: "#FF8C00",
        backgroundColor: "FF2D00",
        fontSize: "40px"
    }

    return(
            <h2 style={styles}> Hello! Todays date is: {date} and the current time is: {time}.</h2>
    )
}

export default App