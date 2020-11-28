import React from 'react';
function ListItem(props){
    return (<>
        <p className = "list">{props.Item}</p>
        <button className = "edit">Edit</button>
        <button className = "delete">Delete</button>
        <input type = "text" placeholder = "Edit Text" className = "editTask"/>
        <button className = "saveTask">Save</button>
    </>)
}
export default ListItem