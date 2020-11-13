import React from "react";
import "./../styles/App.css";

function App() 
{
	const DeleteItem = () =>{
		console.log("Delete item");
	}
	function AddElement(){
		const Main = document.getElementById("main");
		const Data = document.getElementById("task").value;
		if(Data.length != ""){
			const Text = document.createTextNode(Data);
		const List = document.createElement("li");
		List.setAttribute("className", "list");
		List.appendChild(Text);
		const Delete = document.createElement("button");
		Delete.setAttribute("className", "delete");
		Delete.setAttribute("onClick", {DeleteItem});
		Delete.innerHTML = "delete";
		List.appendChild(Delete);
		const Edit = document.createElement("button");
		Edit.innerHTML = "edit";
		List.appendChild(Edit);
		Main.appendChild(List);
		console.log(List);}

	}
	return (
	<div id="main">
	   <textarea id = "task"></textarea>
	   <button id = "btn" onClick = {AddElement}>Add</button>
	</div>
	);
}


export default App;
