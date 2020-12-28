import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import LoginForm from "./LoginForm";
// import ListItem from '../ListItem';
import TodoList from "./TodoList";

//serverpath = D:\my view\Ashutosh yadav\Newton School\ReactProjects\todo_app
function App() 
{
	const [loggedin, setLoggedin] = useState(false);
	const [error, setError] = useState();
	const [userName, setUserName]= useState(undefined);
  
 const getUserName = ()=>{
	return fetch('http://localhost:9999/userinfo', {
		 credentials: "include",
	 }).then(res =>{
		 if(res.ok){
			 return res.json();
		 }else{
			 setLoggedin(false);
			 setUserName(undefined);
			 return {success: false}
		 }
	 }).then(r=>{
		 if(r.success !== false){
		 setLoggedin(true);
		 setUserName(r.userName);
		}
	 });
 }
 useEffect(()=>{
	 getUserName();
 }, []);

	const signupHandler = (username, password) => {
		loginOrSignup('http://localhost:9999/signup', username, password);
	  };
	  const loginHandler = (username, password) => {
		loginOrSignup('http://localhost:9999/login', username, password);
	  };
	
	  const logoutHandler = () => {
		return fetch('http://localhost:9999/logout', { credentials: 'include'})
		.then(r => {
		  if(r.ok) {
			setLoggedin(false);
			setUserName(undefined);
		  }
		});
	  };
	
	
	  const loginOrSignup = (url, username, password) => {
		fetch(url, {
		  method: "POST",
		  body: JSON.stringify({ userName: username, password }),
		  headers: {
			"Content-Type": "application/json",
		  },
		  credentials:"include"
		})
		  .then((r) => {
			if(r.ok) {
			  return { success: true };
			} else {
			  return r.json()
			}
		  })
		  .then((r) => {
			if(r.success === true) {
			 return getUserName();
			} else {
			  setError(r.err);
			}
		  });
	  }

	return (
	<div id="main">
	 {loggedin ? <TodoList user = {userName} logOut = {logoutHandler}/> : 
	 <LoginForm logInHandler = {loginHandler} 
	 signupHandler = {signupHandler} error = {error}/>
	 }
	</div>
	);
}


export default App;
