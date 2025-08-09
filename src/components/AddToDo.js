import React,{useState} from "react";

function AddToDo({callTodo}){
const [value,setValue]=useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    if(value)
    {
        callTodo(value);
        setValue("");
    }
}
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            className=""
            placeholder="Enter Your Task"
            /><button type="submit" className="addbtn" >Add Task</button>
        </form>
    );
}

export default AddToDo;