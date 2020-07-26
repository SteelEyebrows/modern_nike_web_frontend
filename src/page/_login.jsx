import React from 'react';
import axios from 'axios';

function Login() {
  return (
    <div className="App">
      <form onSubmit={e=>login(e)}>
        <input type="email" id="email"/>
        <input type="password" id="password"/>
        <button type="submit">submit</button>
      </form>
     
    </div>
  );
}

function login(e){
  e.preventDefault();
  let request ={
    "email": document.getElementById('email').value,
    "password": document.getElementById('password').value
  }
  axios.post('http://localhost:3036/post',request)
  .then(resp=>{
    alert(resp.data.message);
  })
  .catch(err=>{
    console.log(err);
  })
}
export default Login;
