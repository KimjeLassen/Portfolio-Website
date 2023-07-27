import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {
  const [response, setResponse] = useState("");
  const [responseStatus, setResponseStatus] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errMsg , setErrMsg] = useState("")

  const postData = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/users/login`, {
        username: document.getElementById("uname").value,
        password: document.getElementById("psw").value,
      });

      const message = response.data;
      setResponse(message);
      setResponseStatus(response.status);
      setSuccess(true);
    } catch (error) {
        if (!error?.response){
            setErrMsg("No Server Response");
        } 
        else if(error.response.status === 400) {
            setErrMsg("Wrong username or password");
        }
        else {
            setErrMsg("Login failed")
        }
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    postData();
  }
  return (
    <>
    {success ? (
        <section>
            <h1>You have logged in!</h1>
            <br/>
            <p>
                <a href="/">Go to home</a>
            </p>
        </section>
    ) : (
    <div>
      <form onSubmit={handleSubmit} id="loginForm">
        <label for="uname">Username</label>
        <input type="text" placeholder="Enter Username" id="uname" required />
        <label for="psw">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" id="psw" required />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleSubmit}>Klik mig</button>
      <p>Response: {errMsg}</p>
      <p>Status: {responseStatus}</p>
    </div>
    )}
    </>
  );
}
