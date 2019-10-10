import React from "react";

function SmallImage(props) {
    console.log (props.image);
    return (
        <img src={props.image} />
    )
}

export default SmallImage;