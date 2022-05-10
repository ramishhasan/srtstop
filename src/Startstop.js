import React, { useState } from "react";
var adjustinterval=undefined;
function Startstop()
{
    const [watch,setwatch]=useState(0)
    const [butdisable,setbutdisable]=useState(false)
    const start=()=>{
        adjustinterval=setInterval(()=>{
setwatch((e)=>e+1)
},1000)
setbutdisable(true)
    }
    const stop = ()=>{
clearInterval(adjustinterval)
setbutdisable(false)

    }
    const reset =()=>{
        setwatch(0)
        clearInterval(adjustinterval)
        setbutdisable(false)

    }
    
    return(
        <div className="App">
            <h1 style={{color:'maroon',margin:'20px'}}>START STOP WATCH</h1>
            <h1>{watch}</h1>
       <button className="start" onClick={start} disabled={butdisable}>START</button>
       <button className="stop" onClick={stop}>STOP</button>
       <button className="reset" onClick={reset}>RESET</button>
        </div>
    )
}
export default Startstop;