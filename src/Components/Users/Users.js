import {useEffect, useState} from "react";
import {User} from "../User/User";

const Users = () => {
    const [users ,setUsers ]=useState([])
    const [count, setCount]=useState(0)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value))
        },
[count]
    )
console.log(users)
 return (

  <div>
   <button onClick={()=>setCount(prevState => prevState+1)}> Click</button>
      {users.map(user=> <User key={user.id} user={user}/>)}
  </div>
 );
};

export {Users};