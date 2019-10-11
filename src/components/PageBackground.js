import React from "react";
//import styled from "styled-components";
/*
const ImageWrapper = styled.div`
    
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    color: '#00FF00'
    height: '800px'
    width: '800px'
;`
*/
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
        // let theWholeThing = document.querySelector(".App");
        // theWholeThing.backgroundColor = "red";

            //  <div backgroundImage={props.data.hdurl} alt={props.data.title} width="800px"
            //  style={{border: 5px solid hotpink}}>
            // {{ backgroundImage: `url(${props.data.url})` }}>
            // <ImageWrapper style=
            // {{ background: `#783478` }}
            // <img src={props.data.url} alt={props.data.title} width="100%" zIndex="-1"/>
            // > <div><h1>WTF?!</h1></div>
            // <ImageWrapper style={{ backgroundImage: `url(${props.data.url})` }}>
            // </ImageWrapper>

            return (
            <img src={props.data.url} alt={props.data.title} width="100%"/>
        )
    }
}

export default PageBackground;