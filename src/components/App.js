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
	return (
	<div id="main">
	   <textarea id = "task" value = {item} placeholder= "Enter Item name" onChange = {(e)=>setItem(e.target.value)}></textarea>
	   <button id = "btn" onClick = {AddItemToList}>Add</button>
	   {items.map((newItem, Idx)=>{
		   return <ListItem key = {Idx} Item = {newItem}/>
	   })}
	   
	</div>
	);
}


export default App;
