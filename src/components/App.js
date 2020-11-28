import React, { useState } from "react";
import "./../styles/App.css";


function App() 
{
	const [item, setItem] = useState(["rehata", "atul yadav"]);
	return (
	<div id="main">
	   <textarea id = "task" placeholder= "Enter Item name"></textarea>
	   <button id = "btn">Add</button>
	   {item.map((NewItem, idx)=>{
	 	<ListItem Item = {NewItem} key = {idx}/>
	   })}
	   
	</div>
	);
}


export default App;
