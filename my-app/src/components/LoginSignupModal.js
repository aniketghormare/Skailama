import React, { useState } from 'react';
import '../style/LoginModal.css';
// import { json } from 'stream/consumers';

const LoginSignupModal = ({ onClose, onLoginSuccess,getProjects }) => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = () => {
        // Perform login logic
        // If successful:
        fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, password
            })

        }).then((res) => {
            return res.json()
        }).then((data) => {
            if(data.msg=="User already registered"){
                alert(data.msg)
            }else{
                alert(data.msg)
                localStorage.setItem("token",JSON.stringify(data.token))
                setEmail("")
                setPassword("")
                // setIsLogin(isLogin)
                setTimeout(()=>{
                    getProjects()
                },2000)
               
                  onLoginSuccess();
            }
            // console.log(data)
        }).catch((err) => {
            console.log(err)
        })
       
    };

    const handlesignup = (e) => {
            
    }

    const handleSignup = () => {
        console.log(email, password)
        // onLoginSuccess();

        fetch("http://localhost:5000/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, password
            })

        }).then((res) => {
            return res.json()
        }).then((data) => {
            if(data.msg=="User already registered"){
                alert(data.msg)
            }else{
                alert(data.msg)
                setEmail("")
                setPassword("")
                // setIsLogin(isLogin)
            }
            // console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    };

    return (
        <div className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>&times;</span>
                <h2>{isLogin ? "Login" : "Signup"}</h2>
                {isLogin ? (
                    <div>
                        <input type="email" value={email} placeholder="Email"onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                ) : (
                    <div>
                        <input type="email" value={email} name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" value={password} name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                    </div>
                )}
                <div className='button-container'>
                    <button onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Switch to Signup" : "Switch to Login"}
                    </button>
                    <button onClick={isLogin ? handleLogin : handleSignup}>
                        {isLogin ? "Login" : "Signup"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginSignupModal;
