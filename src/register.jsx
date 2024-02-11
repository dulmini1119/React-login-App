import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pass !== confirmPass) {
          alert("Passwords do not match!");
          return;
        }
        console.log("Registration successful!");
        console.log("Email:", email);
        console.log("Password:", pass);
      };
    

    return (
        <div className="auth-form-container">
            <h2 className="title">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} type="password" id="confirmPassword" placeholder="*********" required/>
            <br />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}