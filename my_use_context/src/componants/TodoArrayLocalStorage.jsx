import React from 'react'
import { useState, useEffect } from 'react'

const TodoArrayLocalStorage = () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);  // bcz all task pass in array

    const [fruit, setFruit] = useState("");
    const [fruits, setFruits] = useState([]);

    useEffect (() => {

        const localData = ()=> {
             const saved = JSON.parse(localStorage.getItem("tasks"));
        
        if(saved){
            setTasks(saved);
        }
        };
        localData();
  
    },[]);


    const addTask = () => {
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        localStorage.setItem("tasks",JSON.stringify(newTasks));
        setTask("");

    }

    useEffect (() => {

        const localFruits = () => {

             const stored = JSON.parse(localStorage.getItem("fruits"));

             if(stored){
                setFruits(stored);
            }
       }

        localFruits();  
       
    },[]);

    const addFruit = () => {
        const newFruits = [...fruits, fruit];
        setFruits(newFruits);
        localStorage.setItem("fruits", JSON.stringify(newFruits));
        setFruit("");
    }




  return (
    <div>

        <h1>Todo app (Local storage) </h1>
        <input value={task} onChange={(e) => setTask (e.target.value)} />
        <button onClick={addTask}>Add</button>

        <ul>
            {tasks.map((t, index) =>(

                <li key={index}>{t}</li>

            ))}
        </ul>

        <h1>Fruits lisk</h1>
        <input value={fruit} onChange={(e) => setFruit (e.target.value)} />
        <button onClick = {addFruit}>Add</button>

        <ul>
            {fruits.map((f, index) => (
                <li key={index}>{f}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default TodoArrayLocalStorage
