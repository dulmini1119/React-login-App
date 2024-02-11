import React, {useState} from "react";



export const Login = (props) =>
{
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <h2 className="title">Login</h2>
        <form action="" className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="abc@gmail.com" />

            <label htmlFor="password">Password</label>
            <input value={pass}onChange={(e) => setPass(e.target.value)} type="password" id="password" placeholder="*********" />
            <br />
            <button type="submit">Login</button>
        </form>
        <br />
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
} 