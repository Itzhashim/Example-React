import React,{useState} from "react";

function TaskList({tasks, deleteTask, updateTask}){
    const [editId, setEditId] = useState(null);
    const [input, setInput] = useState("");

    const handleEdit = (task) => {
        setEditId(task.id);
        setInput(task.text);
    };

    const handleUpdate = (id) => {
        updateTask(id,input);
        setEditId("");
    };

    return(
        <div>
            {tasks.map((task) => (
                <div key= {task.id}>
                    {editId  === task.id ? (
                    <>
                        <input
                            type = "text"
                            value = {input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button onClick={() => handleUpdate(task.id)}>Save</button>
                    </>
                    ):(
                    <>
                        <span>{task.text}</span>
                        <button onClick={() => handleEdit(task)}>Edit</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </>
                    )
    }
                </div>
            ))}
        </div>
    );
}

export default TaskList;