import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Image from "./components/Image";
import InfoBox from "./components/InfoBox";

const API_KEY = "DEMO_KEY";

const getToday = () => {
  let today = new Date();
  let dateString = today.getFullYear() + '-' + 
                 ('0' + (today.getMonth() + 1)).slice(-2) +
                 '-' + ('0' + today.getDate()).slice(-2);
  console.log (dateString);
  return dateString;
}

function App() {

  const [imageData, setImageData] = useState({});
  const [date, setDate] = useState(getToday());
  let callCounter = 0;

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

        setImageData(response.data);
        console.log ("Use Effect Counter: " + ++callCounter);
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
      <h1>The NASA Image of the Day</h1>
      <form action="">
        <input type="date" id="submit_date" name="theDate" value={date}
          min="2019-01-01" max="2019-10-10" onChange={submit_date}
        />
        { /*<button type="button" onClick={setDate(
          document.getElementById("submit_date").value ? 
        document.getElementById("submit_date").value : date)}>Update</button> */ }
      </form>
      <InfoBox data={imageData} />
      <Image url={imageData.hdurl} alt={imageData.title} width="100%" />
    </div>
  );
}

export default App;

