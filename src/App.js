import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Image from "./components/Image";
import InfoBox from "./components/InfoBox";

const API_KEY = "DEMO_KEY";

function App() {

  const [imageData, setImageData] = useState({});
  let callCounter = 0;

/*  const setImageData = (newData) => {
    imageData.date            = newData.date;
    imageData.explanation     = newData.explanation;
    imageData.hdurl           = newData.hdurl;
    imageData.mediaType       = newData.media_type;
    imageData.serviceVersion  = newData.service_version;
    imageData.title           = newData.title;
    imageData.url             = newData.url; 
  } */

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then( response => {

        setImageData(response.data);
        console.log ("Use Effect Counter: " + ++callCounter);
      })
      .catch( error => {
        console.log ("Houston, we have a problem...");
      });
    }, []);
  
  return (
    <div className="App">
      <h1>The NASA Image of the Day</h1>
      <InfoBox data={imageData} />
      <Image url={imageData.hdurl} alt={imageData.title} />
    </div>
  );
}

export default App;
