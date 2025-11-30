import { useEffect, useState } from "react";

const UseEffectAPIList = () => {
    const [ users, setUsers] = useState([]);

    const [ image, setImages] = useState([]);

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);

    useEffect (() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setImages(data))
    },[]);




  return (
    <div>
      <h1>User List Names</h1>
      <ul>
        {users.map(u => (
            <li key={u.id}>{u.name} = {u.email}</li>
        ))}
    <h1>UserName list</h1>
        {users.map(u => (
            <li key={u.id}>{u.username} - {u.address.city}</li>
        ))}
      </ul>

      
        <h1>Image list</h1>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
                {image.map(img => (
                <li >
                    <img key={img.id} src={img.image} className="img-fluid rounded"
                     style={{ width: "150px", height: "150px", objectFit: "cover" }}
/>
                    <h3>Rs.{img.price}</h3>
                </li>
            ))}
        </ul>
        
    </div>
  );
};

export default UseEffectAPIList;
