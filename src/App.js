import React from "react";
import "./styles.css";
import Weather from "./weatherData"
import WeatherForecast from "./components/WeatherForecast"
export default function App() {
  //testing
  console.log(Weather)
  const weather=Weather.map((element,index)=>{
    return (
      <div className="weather">
      
        <WeatherForecast {...element} key={index}/>
  
      
      </div>
    );
  })
  return(
    <div className='weather'>
      <h2> Weather App</h2>
      <section>{weather}</section>
    </div>
  )

  }
  