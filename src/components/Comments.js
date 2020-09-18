import React,{useState,useEffect} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import './UserList.css';

const  Comments = (props) => {

    console.log("this is my param", props.match.params.id);
    
    const [comments ,setComments]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get(
            "https://jsonplaceholder.typicode.com/comments?postId="+props.match.params.id 
        );
            setComments(result.data);
        };
        fetchData();
        }, []);
    
    
    return (
        <div>
    
    <h2>{`Comments of post ${props.match.params.id }`}</h2>    
     {comments.map(el => (
       
   <div className="card" style={{width: '18rem'}}>
     
  <ul className="list-group list-group-flush">
    <li className="list-group-item"> {el.email}</li>
    <li className="list-group-item"> {el.body}</li>
  </ul>
</div>

         
       
     ))}
   
        </div>
    )
}

export default Comments
