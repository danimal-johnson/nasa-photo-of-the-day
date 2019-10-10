import React from "react";

function LargeImage(props) {
    console.log (props.url);
    console.log (props.alt);
    return (
        <img src={props.url} alt={props.alt} />
    )
}

export default LargeImage;