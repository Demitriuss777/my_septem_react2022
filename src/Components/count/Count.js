import {useState} from "react";
// робимо кнопку, при на тискання якої збільшується значення на +1
const Count = () => {
    const [b,setb]=useState(0)
    console.log(Count)
    const inc =()=>{
        setb(prevState => prevState+1)
    }

 return (

  <div>
   <div> B:{b}</div>
      <button onClick={()=>inc(1)}> ClicMe</button>
  </div>
 );
};

export {Count};