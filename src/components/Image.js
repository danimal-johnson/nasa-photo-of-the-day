import React from "react";

function Image(props) {
    console.log (props.url);
    console.log (props.alt);
    return (
        <img src={props.url} alt={props.alt} />
    )
}

export default Image;