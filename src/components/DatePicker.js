import React from "react";
// import styled from "styled-components";
import styled from "styled-components"

const DatePick = styled.div`

    [type="date"] {
        font-size: 1.6rem;
        border: 1px solid black;
        border-radius: 4px;
        margin-bottom: 1rem;
    }
    
    [type="date"]::-webkit-inner-spin-button {
        display: none; 
  }

`;


function DatePicker (props) {
    console.log (props);
    
  return (
    <DatePick>
      <form action="">
        <input type="date" id="submit_date" name="theDate" value={props.date}
          min="2018-01-01" max={props.today} onChange={props.submit_date} />
      </form>
    </DatePick>
  )
}

export default DatePicker;