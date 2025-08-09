import React,{useState} from "react";

function Filter({actions}){
    const [selVal, setSelVal] = useState('All');

    function ddHandler(e)
    {
        actions(e.target.value);
    }

    return(
        <div>
            <h2>Filter List</h2>
            <select onChange={ddHandler} className="dropdown" >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
        </div>
    );
}

export default Filter;