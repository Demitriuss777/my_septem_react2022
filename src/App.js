import {Users} from "./components/Users";
import {UsersDietails} from "./components/UsersDietails";
import './App.css'
import {getUser} from "./Service/getUser";
import {useEffect, useState} from "react";
const App = () => {
    const [users,setUsers]= useState([])
    useEffect( ()=>{
        getUser()
            .then( value=>setUsers(value))
    }, [])
    console.log(users)


    return (

        <div className="app">
         <div className="infoBlock">
         <Users/>
         </div>
           <div className="divider"/>
            <div className="infoBlock">
            <UsersDietails/>
            </div>
        </div>
    );
};

export {App};
