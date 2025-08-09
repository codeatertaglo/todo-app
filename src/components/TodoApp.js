import React, {useState, useEffect} from "react";
import AddToDo from "./AddToDo";
import TodoList from "./TodoList";
import Filter from "./Filter";

function TodoApp(){
    let initTodo, initTask;
    if(localStorage.getItem('todos')===null)
    {
        initTodo=[];
        initTask='All';
    }
    else
    {
        initTodo= JSON.parse(localStorage.getItem('todos'));
        initTask = localStorage.getItem('taskType');
        //console.log('Local Storage: '+localStorage.getItem('todos'));
    }
    const [todos, setTodos] = useState(initTodo);
    const [taskType, setTaskType] = useState(initTask);
    const [filteredTodos,setFilterTodos]=useState(initTodo);
   
    const adTodo = (todo) =>{
        setTodos([ ...todos, 
            {
                id:Date.now(),
                task: todo,
                completed:false 
            }
        ]);
        setFilterTodos(todos);        
    }

    const handleStatus = (tid,val) => {
        //alert('Paretnt handleStatus: Id='+tid+' Val='+val);
        setTodos((prevtodos) =>
            prevtodos.map((todo) => todo.id===tid ? {...todo, completed: !val } : todo)    
        );
        setFilterTodos(todos);
    }

    const handleDelete = (tid) =>{
        //alert('Paretnt handleDelete: Id='+tid);
        setTodos((prevtodos) => prevtodos.filter((todo) => todo.id!=tid));
        setFilterTodos(todos);
    }

    const handleFilter = (val) =>{
        ///alert('Filter Calling...'+val);
        let filtered=[];
        switch(val)
        {
            case 'Completed':
                filtered = todos.filter((todo) => todo.completed===true);
                setFilterTodos(filtered);
                localStorage.setItem('taskType',JSON.stringify('Completed'));
                break;
            case 'Pending':
                filtered = todos.filter((todo) => todo.completed===false);
                setFilterTodos(filtered);
                localStorage.setItem('taskType',JSON.stringify('Pending'));                
                break;
            default:
                setFilterTodos(todos);
                localStorage.setItem('taskType',JSON.stringify('All'));
        }
    }

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
        setFilterTodos(todos);
       
    },[todos])
    
    //console.log('TaskType='+localStorage.getItem('taskType'));
    //console.log('Filtere Array='+JSON.stringify(filteredTodos));
    
    return(
        <div className="item">
            <h1>Todo App</h1>
            <AddToDo callTodo={adTodo} />
            <Filter actions={handleFilter}/>
            <TodoList todos={filteredTodos} actions={{onEdit:handleStatus, onDelete:handleDelete }}/>
        </div>
    );
}

export default TodoApp;