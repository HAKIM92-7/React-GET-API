import React,{useState,useEffect} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './UserList.css';

const UserList = () => {
    
    const [users,setUsers]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
            setUsers(result.data);
        };
        fetchData();
        }, []);
    
    
    return (
        <div>
    
    <h2>Users List</h2>    
     {users.map(el => (
       
   <div className="card" style={{width: '18rem'}}>
     
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Name: {el.name}</li>
    <li className="list-group-item">User Name : {el.username}</li>
    <li className="list-group-item">Email : {el.email}</li>
    <li className="list-group-item">Adress: {el.address.street} {el.address.suite} {el.address.city}</li>
  </ul>
</div>

         
       
     ))}
   
        </div>
    )
}

export default UserList
