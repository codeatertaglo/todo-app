import react from "react";
import TodoItem from "./TodoItem";

function TodoList({todos, actions}){
console.log(todos);
    return(
        <div className="item">
            <h1>Todo List</h1>
            { 
            todos.length ?
            todos.map((item,index) => (                  
             <TodoItem item={item} actions={actions}/> 
            )) : <h3>Todo List is Emplty. Please Add Some Tasks.</h3>
             }
                      
        </div>
    )
}
export default TodoList;