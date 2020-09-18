import React,{useState,useEffect} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './UserList.css';
import {Link,Route} from 'react-router-dom'

const Posts = (props) => {

    console.log("this is my param", props.match.params.id);
    
    const [posts,setPosts]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?userId="+props.match.params.id 
        );
            setPosts(result.data);
        };
        fetchData();
        }, []);
    
    
    return (
        <div>
    
    <h2>{`Posts of User ${props.match.params.id }`}</h2>    
     {posts.map(el => (
       
   <div className="card" style={{width: '18rem'}}>
     
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Title: {el.title}</li>
    <li className="list-group-item"> {el.body}</li>
  </ul>
  <Link  to={`/comments/${el.id}`}> Comments</Link>
</div>

         
       
     ))}
   
        </div>
    )
}

export default Posts
