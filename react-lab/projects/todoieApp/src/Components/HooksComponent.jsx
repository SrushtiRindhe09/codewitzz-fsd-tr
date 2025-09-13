import React,{ useState } from 'react';
 
const HooksComponent = () => {
    const [count ,setvalue]= useState(89);
    return(<div>
        <p>count component - {count}
            <h6>number is {count%2===0 ? 'Even':'Odd'}</h6>
        </p>
    </div>);
}
export default HooksComponent;
