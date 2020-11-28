import React, { useState } from "react";
import "./../styles/App.css";
import ListItem from '../ListItem';
function App() 
{
	const [item, setItem] = useState("");
	const [items, setItems] = useState([]);

const AddItemToList = () => {
    setItems((oldItem) => {
		return [...oldItem, item];
	})
	setItem("");
};	
const Delete = (index)=>{
	 items.splice(index, 1);
	 setItems([...items]);
}
const SaveNewItem = ( EditedItem, index) =>{
	items[index] = EditedItem;
	setItems([...items]);
}
	return (
	<div id="main">
	   <textarea id = "task" value = {item} placeholder= "Enter Item name" onChange = {(e)=>setItem(e.target.value)}></textarea>
	   <button id = "btn" onClick = {AddItemToList} disabled = {item.trim().length === 0}>Add</button>
	   {items.map((newItem, Idx)=>{
		   return <ListItem key = {`${newItem}_${Idx}`} idx = {Idx} 
		   Item = {newItem} DeleteItem = {Delete} EditHandler = {SaveNewItem}/>
	   })}
	   
	</div>
	);
}


export default App;
