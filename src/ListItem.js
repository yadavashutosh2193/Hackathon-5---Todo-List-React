import React, { useState } from 'react';
function ListItem(props){
    const [editedItem, setEditedItem] = useState(props.Item);
    const [Edit, setEdit] = useState(false);
    
    const SaveTask = () =>{
        props.EditHandler(editedItem, props.idx);
        setEdit(false);
    }
    return (<>
    {!Edit ? <>
    <div className = "ListItemDiv">
        <p className = "list">{props.Item}</p>
        <button className = "edit" onClick = {()=> setEdit(true)}>Edit</button>
        <button className = "delete" onClick = {()=>props.DeleteItem(props.idx)}>Delete</button>
        </div>
        </> : 
        <>
        <div className = "ListItemDiv">
        <input type = "text" value = {editedItem} placeholder = "Edit Text" className = "editTask" onChange = {(e)=>setEditedItem(e.target.value)}/>
        <button className = "saveTask" disabled = {editedItem.length === 0} onClick = {SaveTask}>Save</button>
        </div>
        </>}
        
        
    </>)
}
export default ListItem