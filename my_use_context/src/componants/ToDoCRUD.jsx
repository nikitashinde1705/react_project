import React from 'react'
import { useState, useEffect } from 'react'

const ToDoCRUD = () => {

    const [task, setTask] = useState("");
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState(null);

    useEffect (() => {
        setList(JSON.parse(localStorage.getItem("todo")) || []);
        
    },[]);

    const save = (data) => {
        setList(data);
        localStorage.setItem("todo", JSON.stringify(data));
    };

    const submit = () => {
        if(!task) return alert("Enter task");

        if(edit !== null) {
            list[edit] = task;
            save([...list]);
            setEdit(null);
        }
        else{
            save([...list, task]);
        }

        setTask("");
    };

    const editTask = (i) => {
        setTask(list[i]);
        setEdit(i);
    }

    const clearAll = () => {
        if(confirm("Delete All ?")) save([]);
    }

    const remove = (i) => {
    const updated = list.filter((_, index) => index !== i);
    save(updated);
};


  return (
    <div>

        <div className="container">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h3>Todo App (CRUD)</h3>
                </div>
                <div className="card-body">

                    <div className="input-group">

                        <input className='form-control' value={task}
                        onChange={(e) => setTask (e.target.value)}
                        placeholder='Enter Task' />

                        <button onClick={submit} className='btn btn-success'>
                            {edit !== null ? "Update" : "Add"}
                        </button>

                    </div>

                    <ul className='list-group'>
                        {list.map((t,i) => (
                            <li key={i} className='list-group-item d-flex justify-content-between'>
                                {t}
                                <div>
                                    <button className='btn btn-warning' onClick={() => editTask(i)}>Edit</button>
                                    <button className='btn btn-danger' onClick={() => remove(i)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {list.length > 0 && (
                        <button onClick={clearAll} className='btn btn-dark'>clear All</button>
                    )}
                    
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default ToDoCRUD
