import React from 'react'

const Weather= ({conditions,time}) =>{
    return( 
    <div>
        <p className="conditions"><span>conditions:</span>{conditions}</p>
        <p className="time"><span>time:</span>{time}</p>
        </div>
      
    )
}

export default Weather