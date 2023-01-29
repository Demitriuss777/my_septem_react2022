import {useEffect, useState} from "react";

import {User} from "../User/User";
import {userService} from "../../Services/userService";

const Users = () => {
    const [users ,setUsers ]=useState([])
    const [count, setCount]=useState(0)
    const [userDetails, setUserDetails]=useState(null)
    useEffect(()=>{
       /* fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))*/
        // aбо через axios
     /*   axios.get('https://jsonplaceholder.typicode.com/users')
            .then(value => value.data)   // data це підглядів в масиві
            .then(value => setUsers([...value])) // value обов'язково*/

        // тепер с лінкой на service
     /*   axiosServices.get('/users')
            .then(value => value.data)
            .then(value => setUsers([...value]))*/

        userService.getAll()
            .then(value => value.data)
            .then(value => setUsers([...value]))
        },
[count]
    )
console.log(users)
 return (

  <div>
      <h1>UserDetails:</h1>
      {userDetails && <User user={userDetails}/>}

      <hr/>

      <h1> Users:</h1>

  {/* <button onClick={()=>setCount(prevState => prevState+1)}> Click</button>*/}
      {users.map(user=> <User
          key={user.id}
          user={user}
      setUserDetails={setUserDetails}
      />)}
  </div>
 );
};

export {Users};