import { useState } from "react";

let Form = (props) => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    let handleFormSubmit = (event) => {
        event.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Login failed');
            }
        })
        .then(data => {
            localStorage.setItem("dummyUser", JSON.stringify(data));
            props.userLoggedIn(true);
        })
        .catch(error => {
            setUsername('');
            setPassword('');
            alert('Invalid Credentials!')
        });
    }

    return (
        <form className="center-card" method="POST" onSubmit={handleFormSubmit}>
            <span className="welcome-text">Welcome back! 👋</span>
            <h2>Sign in to your account</h2>
            <div className="form-data">
                <label htmlFor="username ">User Name</label>
                <input type="name" id="username" value={username} onChange={(e) => {
                    setUsername(e.currentTarget.value.trim());
                }} required />
            </div>
            <div className="form-data">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => {
                    setPassword(e.currentTarget.value.trim());
                }} required />
            </div>

            <button className="btn" type="submit">Continue</button>

            <div className="forget-pass">
                <a href="https://google.com">Forget your password?</a>
            </div>
        </form>
    )
}

export default Form;