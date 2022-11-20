import React from 'react'
import WeatherIcon from './WeatherIcon'
import Weather from './WeatherData'

const WeatherForecast =({img,time,conditions})=>{
return(
<div className="weather-forecast">

<WeatherIcon img={img} />



<Weather time={time} conditions={conditions}/>
</div>


)
}

export default WeatherForecast 