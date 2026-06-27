import { useDispatch } from "react-redux";
import { createUser, loginUser, logOutUser } from "../redux/users/usersOperation";
import { useState } from "react";

export const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(false);

    const dispatch = useDispatch()

    const handleSubmit =(e) =>{
e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    console.log(isLogin)
    if(isLogin){
        dispatch(loginUser({email, password}))
    } else {
        dispatch(createUser({email, password}))
    }
    console.log(email, password)
      form.reset();
    }

    return(
        <form  onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "200px", gap: "10px", backgroundColor: "#f0f0f0", padding: "20px", position: "fixed", top: "5%", left: "5%"}}  >
      <input
        type="email"
        name="email"
        placeholder="Enter email here"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password here"
      />
      {isLogin ? <button type="submit">Log in</button> : <button type="submit">Register</button>}
      <button type="button" onClick={() => {dispatch(logOutUser())}}>Log out</button>
      <a href="#" onClick={() => setIsLogin(!isLogin)}> {isLogin ? "Don't have an account? Register here" : "Already have an account? Log in here"}</a>
    </form>
    )
} 