import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import ListItem from '../ListItem';

function TodoList(props) 
{
	const [item, setItem] = useState("");
	const [items, setItems] = useState([]);

const AddItemToList = () => {
	fetch('http://localhost:9999/todo', {
		method: "POST",
		body: JSON.stringify({task: item}),
		headers: {
			'Content-Type':'application/json'
		},
		credentials: 'include'
	}).then(r => r.json())
	.then(resp => {
        items.push(resp);
    setItems([...items]);
	setItem("");
	})
	
};	
const Delete = (index)=>{
	const ItemtoDelete = items[index]._id;
	fetch(`http://localhost:9999/todo/${ItemtoDelete}`,{
		method: 'DELETE', credentials: 'include'
	}).then(r=>{
		items.splice(index, 1);
		setItems([...items]);
	});	
};
const SaveNewItem = ( EditedItem, index) =>{
	const IdToEdit = items[index]._id;
	fetch(`http://localhost:9999/todo/${IdToEdit}`,{
		method : 'PUT',
		body: JSON.stringify({task: EditedItem}),
		headers: {
			'Content-Type':'application/json'
		},
		credentials: 'include'
	}).then(r => r.json()).then(resp => {
		console.log("Got successfully response from PUT", resp);
		items[index] = resp;
		setItems([...items]);
	});	
};
useEffect(()=>{
	fetch('http://localhost:9999/todo', {credentials: 'include'})
	.then(response => response.json())
	.then(arr=>{
		const sortedArr = arr.sort((a, b) => {
            const aDateNumeric = new Date(a.creationTime).valueOf();
            const bDateNumeric = new Date(b.creationTime).valueOf();
            return aDateNumeric - bDateNumeric;

        });
                setItems(sortedArr);      
	});
}, []);
	return (
	<div id="mainToDo">
	<div className = "UserInfo">
	<p className = "userName">UserName: {props.user}</p>
	<button className = "Logoutbtn" onClick = {()=>props.logOut()}>LogOut</button>
	</div>
	<div className = "TaskAndAddtn">
	   <textarea id = "task" value = {item} placeholder= "Enter Item name" 
	   onChange = {(e)=>setItem(e.target.value)}></textarea>
	   <button id = "btn" onClick = {AddItemToList} 
	   disabled = {item.trim().length === 0}>Add</button>
	   </div>
	   {items.map((newItem, Idx)=>{
		   return <ListItem key = {newItem._id} idx = {Idx} 
		   Item = {newItem.task} DeleteItem = {Delete} EditHandler = {SaveNewItem}/>
	   })}  
	</div>
	);
}
export default TodoList;