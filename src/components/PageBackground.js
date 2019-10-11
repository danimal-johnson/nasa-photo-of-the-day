import React from "react";

function PageBackground(props) {

    if (props.data.media_type === "video") {
        return (
            <div backgroundColor="black">
                <iframe title={props.data.title} src={props.data.url}
                 width="560" height="315" allowFullScreen>
                 >Your browser doesn't support iFrames.</iframe>
            </div>
        )
    } else {
        return (
            <img src={props.data.url} alt={props.data.title} width="100%"/>
        )
    }
}

export default PageBackground;