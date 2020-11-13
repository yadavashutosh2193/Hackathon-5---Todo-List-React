import React from "react";
import "./../styles/App.css";

function App() 
{
	function AddElement(){
		const Main = document.getElementById("main");
		const Data = document.getElementById("task").value;
		const Text = document.createTextNode(Data);
		const List = document.createElement("li");
		List.setAttribute("className", "list");
		List.appendChild(Text);
		const Delete = document.createElement("button");
		Delete.setAttribute("className", "delete");
		Delete.innerHTML = "delete";
		List.appendChild(Delete);
		const Edit = document.createElement("button");
		Edit.innerHTML = "edit";
		List.appendChild(Edit);
		Main.appendChild(List);

	}
	return (
	<div id="main">
	   <textarea id = "task"></textarea>
	   <button id = "btn" onClick = {AddElement}>Add</button>
	</div>
	);
}


export default App;
