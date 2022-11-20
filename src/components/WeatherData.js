import React from 'react'

const Weather= ({conditions,time}) =>{
    return(
        <>
        <p className="conditions"><span>conditions:</span>{conditions}</p>
        <p className="time"><span>time:</span>{time}</p>
        </>
      
    )
}

export default Weather