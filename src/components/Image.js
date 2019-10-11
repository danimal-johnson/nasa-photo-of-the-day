import React from "react";

function Image(props) {

    return (
        <img src={props.url} alt={props.alt} width={props.width} />
    )
}

export default Image;