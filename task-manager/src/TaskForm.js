import React, {useState} from 'react';

function TaskForm ({addTask}){
    const [text,  setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return;
        addTask(text);
        setText("");
    };

    return(
        <form onSubmit= {handleSubmit}>
            <input
                type = "text"
                value = {text}
                onChange= {(e) => setText(e.target.value)}
                placeholder='Enter your task'
            />
            <button type = "submit">Add</button>
        </form>
    );
}

export default TaskForm;