import react,{useState} from "react";


function TodoItem({item, actions }){
const {onEdit, onDelete} = actions;
    const handleTaskStatus = (id,val) => {  
        onEdit(id,val);
    }

    const handleRemove = (id) => {  
        onDelete(id);      
    }
    return(
        <div key={item.id} className="ItemContainer">
        <p onClick={() => handleTaskStatus(item.id,item.completed)} className={ item.completed ? 'strike' : ''} >{item.task}  </p><button onClick={() => handleRemove(item.id)}  className="crossBtn" >X</button>
        </div>
    );
}

export default TodoItem;