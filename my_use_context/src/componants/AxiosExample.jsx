import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";

const AxiosExample = () => {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async() =>{
            try{
                const userRes = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(userRes.data);

                const postRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(postRes.data);
            }
            catch(error){
                console.log("Api error", error);
            }
            
        };
        fetchData();
    },[]);

  return (
    <>
      <h2>User List</h2>
      <ol>
        {users.map((u) => (
            <li key={u.id}>{u.name}</li>
        ))}
      </ol>

      <h2>Post List</h2>
      <ol>
        {posts.slice(0,10).map((p) => (

            <>
                <li key={p.id}>{p.title}</li>
                <p>{p.body}</p>
            </>
            
        ))}
      </ol>
    </>
  )

}
export default AxiosExample;
