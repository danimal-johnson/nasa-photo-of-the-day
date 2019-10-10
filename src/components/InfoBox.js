import React from "react";

function InfoBox(props) {
    console.log (props.data);
    return (
        <div className = "infoBox">
            <div className = "boxTitle">{props.data.title}</div>
            <div className = "boxDate">{props.data.date}</div>
            <div className = "boxDesc">{props.data.explanation}</div>
        </div>
    )
}

export default InfoBox;