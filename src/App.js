import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import InfoBox from "./components/InfoBox";
import PageBackground from "./components/PageBackground";
import DatePicker from "./components/DatePicker";
// import Image from "./components/Image";

const API_KEY = "KiOYB2gJaAbZk3A2Bs20bzUIdzsxXSLyDawCgmdc";

const getToday = () => {
  let today = new Date();
  let dateString = today.getFullYear() + '-' + 
                 ('0' + (today.getMonth() + 1)).slice(-2) +
                 '-' + ('0' + today.getDate()).slice(-2);
  console.log (dateString);
  return dateString;
}
const maxDate = getToday();

function App() {

  const [imageData, setImageData] = useState({});
  const [date, setDate] = useState(getToday());

/**** ImageData ****
    date,
    explanation,
    hdurl,
    mediaType,
    serviceVersion,
    title,
    url,
 ******************/

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
      .then( response => {
        console.log(response);
        setImageData(response.data);
      })
      .catch( error => {
        console.log ("Houston, we have a problem...");
      });
    }, [date]);

    const submit_date = e => { 
    e.preventDefault();
    return setDate(e.target.value);
  }

  return (
    <div className="App">
      <h1 className="title">The NASA Image of the Day</h1>
      
      <DatePicker date={date} submit_date={submit_date} today={maxDate}/>
      <InfoBox data={imageData} />
      <PageBackground data={imageData} />
    </div>
  );
}

export default App;

// <Image url={imageData.hdurl} alt={imageData.title} width="100%" />