import React, {useState, useEffect} from 'react';
import "./Register.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import vid from '../../assets/vid/cofeepour.mp4';
import { FaRegUser, FaUserShield, FaUserLock  } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
//import Axios from 'axios';
function Register() {

  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigateTo = useNavigate();

  const [loginStatus, setLoginStatus] = useState('');
  const [statusHolder, setStatusHolder] = useState('message');

  useEffect(() => {
    if(loginStatus !== ''){
      setStatusHolder('showMessage');
      setTimeout(() => {
        setStatusHolder('message')
        loginStatus('');
      }, 4000)
    }
  }, [loginStatus])

  const createUser = (event) => {
    event.preventDefault()

    if (email === '' || user === '' || password === '' || repeatPassword === '') {
      setLoginStatus("Username, email, password, or repeat password cannot be empty.");
      return;
    }
  
    if (password.length < 8) {
      setLoginStatus("Password must be at least 8 characters long.");
      return;
    }
  
    if (password !== repeatPassword) {
      setLoginStatus("Passwords do not match.");
      return;
    }
    //temporary
    setEmail('')
    setPassword('')
    setUser('')
    navigateTo("/cafeshopwebsite/login")
/*
    //axios to create an API that connects to the server
    Axios.post('http://localhost:3002/register', {
    //create variable to send
    email: email,
    username: user,
    password_hash: password

  }).then((response)=>{
    navigateTo('/')

    setEmail('')
    setPassword('')
    setUser('')
    });
  */
  }

    return (
        <div className='registerPage flex'>
          <div className='container flex'>
            <div className='videoDiv'>
              <video src={vid} autoPlay muted loop></video>
                  
            <div className='textDiv'>
              <h2 className='title'>We like to know you more</h2>
              <p>from every breath you take!</p>
            
            </div>
            <div className='footerDiv flex'>
              <span className="text">Already have an account?</span>
              <Link to={'/cafeshopwebsite/login'}>
              <button className='btn-form'>Login</button>
              </Link>
            </div>
            </div>
            <div className="formDiv flex">
              <div className="headerDiv">
                <h3>Welcome to CafeKo</h3>
              </div>
                <form className='formGrid' action='' onSubmit={(event) => createUser(event)}>
                  <span className={statusHolder}>{loginStatus}</span>
                  <div className="inputDiv">
                    <label htmlFor='username'>Username</label>
                    <div className="input flex icon">
                    <FaRegUser className='icon'/>
                    <input type="text" id='username' placeholder='Enter Username'
                    onChange={(event) => {
                      setUser(event.target.value)
                    }}
                    />
                    </div>
                  </div>
                  <div className="inputDiv">
                    <label htmlFor='email'>Email</label>
                    <div className="input flex">
                    <TfiEmail className='icon'/>
                    <input type="email" id='email' placeholder='Enter Email' 
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                    />
                    </div>
                  </div>
                  <div className="inputDiv">
                    <label htmlFor='password'>Pasword</label>
                    <div className="input flex">
                    <FaUserShield className='icon'/>
                    <input type="password" id='password' placeholder='Enter Password'
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                    
                     />
                    </div>
                  </div>
                  <div className="inputDiv">
                    <label htmlFor='repeatPassword'>Repeat Pasword</label>
                    <div className="input flex">
                    <FaUserLock className='icon'/>
                    <input type="password" id='repeatPassword' placeholder='Repeat Password'
                    onChange={(event) => {
                      setRepeatPassword(event.target.value)
                    }}
                    
                     />
                    </div>
                  </div>
                    <button type='submit' className='btn-form flex'>
                      <span>REGISTER</span>
                    </button>

                    <span className='forgotPassword'>
                      Forgot your password? <a href=''>Click here</a>
                    </span>
                  
                </form>
              
            </div>
            
          </div>
        </div>
    );
}

export default Register;