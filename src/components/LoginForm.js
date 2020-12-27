import React, { useState } from 'react';
import "./../styles/App.css";


function LoginForm(props){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    

     return (<>
         <div className = "Login_Form">
         <div className = "Login_Form_Header">
             <h1>Login/Signup Form </h1>
         </div>
         <input type = "text" value = {userName} onChange = {(e)=>setUserName(e.target.value)} className = "username_Field" placeholder = "Enter user name"/>
         <input type = "password" value = {password} onChange = {(e)=>setPassword(e.target.value)} className = "password_field" placeholder = "Enter password"/>
         {props.error ? <p>{props.error}</p> : null}
         <button className = "SignUpBtn" onClick = {()=>props.signupHandler(userName, password)}>SignUp</button>
         <button className = "SignInBtn" onClick = {()=>props.logInHandler(userName, password)}>Login</button>
         </div>
     </>)
}
export default LoginForm;