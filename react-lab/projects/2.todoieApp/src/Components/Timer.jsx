
import React,{useEffect,useState} from 'react';

const Timer = () =>
    {
       const [time,setTime]= useState(0);
    
    useEffect(()=>{
        console.log("Adding new Intervals")
        const timer = setInterval(()=> setTime(time+1),1000);
       
        return function ()
                  {
                    console.log("Clearing old Intervals")
                    clearInterval(timer);
                   }
              }
         ,[time])

    return(
        <div>
            <h1>StopWatch</h1>
            <p>current time is 0</p>
        </div>
    )
}
export default Timer;