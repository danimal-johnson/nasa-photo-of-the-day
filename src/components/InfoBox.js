import React from "react";
import styled from "styled-components"

const StyledInfo = styled.div`

    color: white;
    background: #333333;
    border: 2px solid white;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    justify-content: space-between;

    .boxTitle {
        color: white;
        font-size: 2.5rem;
    }

    .boxDate, .boxCopy {
      color: white;
      font-size: 1rem;
    }

    .boxDesc {
      color: white;
      font-size: 1.4rem;
      width: 70%;
    }
`;


function InfoBox(props) {
    console.log (props.data);
    return (
        <StyledInfo className = "infoBox">
            <div>
                <div className = "boxTitle">{props.data.title}</div>
                <div className = "boxCopy">&copy; {props.data.copyright}</div>
                <div className = "boxDate">{props.data.date}</div>
            </div>
            <div className = "boxDesc">{props.data.explanation}</div>
            
        </StyledInfo>
    )
}

export default InfoBox;