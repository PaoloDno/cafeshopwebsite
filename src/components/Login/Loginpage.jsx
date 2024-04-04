import React, {useState, useEffect} from 'react';
import "./Login.css";
import { Link, Navigate, useNavigate} from 'react-router-dom';
import vid from '../../assets/vid/cofeepour.mp4';
//import Axios from 'axios';
import { FaUserShield, FaUserLock  } from "react-icons/fa";
function LoginForm() {
  
  const navigateTo = useNavigate()
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');
  const [statusHolder, setStatusHolder] = useState('message');
  
  useEffect(() => {
    if(loginStatus !== ''){
      setStatusHolder('showMessage');
      setTimeout(() => {
        setStatusHolder('message')
        setLoginStatus('');
      }, 4000)
    }
  }, [loginStatus])
  
  const loginUser = (event) => {
    event.preventDefault();
  
    // Check if login username or password is empty
    if (loginUsername === '' || loginPassword === '') {
      setLoginStatus("Username or password cannot be empty.");
      return;
    }
    navigateTo('/cafeshopwebsite/');
  /*
    //axios to create an API that connects to the server
    Axios.post('http://localhost:3002/login', {
      //create variables to send
      loginUsername: loginUsername,
      loginPassword_hash: loginPassword
    })
    .then((response) => {
      // Assuming the server returns a success status code (e.g., 200) for successful login
      if (!response.data.message) {
        console.log('Login successful!');
        navigateTo('/dashboard');
        setLoginUsername('');
        setLoginPassword('');
        setLoginStatus('');
      } else {
        // Handle other status codes (e.g., 401 for unauthorized)
        setLoginStatus("Credentials don't match");
        
        // Cleanup function if it exists
      }
    })
    .catch((error) => {
      console.error('Error logging in:', error);
      // Handle error, such as network error or server error
      setLoginStatus("An error occurred while logging in.");
    });
  */
  };
   

    return (
        <div className='loginPage flex'>
          <div className='container flex'>
            <div className='videoDiv'>
              <video src={vid} autoPlay muted loop></video>
                  
            <div className='textDiv'>
              <h2 className='title'>Operate and Sell Kidneys</h2>
              <p>lets get the business runnning!</p>
            
            </div>
            <div className='footerDiv flex'>
              <span className="text">Dont have an account?</span>
              <Link to={'/cafeshopwebsite/register'}>
              <button className='btn-form'>Sign-up</button>
              </Link>
            </div>
            </div>
            <div className="formDiv flex">
              <div className="headerDiv">
                <h3>Welcome to CafeKo</h3>
              </div>
                <form className='formGrid'>
                  <span className={statusHolder}>{loginStatus}</span>
                  <div className="inputDiv">
                    <label htmlFor='username'>Username</label>
                    <div className="input flex icon">
                    <FaUserShield className='icon'/>
                    <input type="text" id='username' placeholder='Enter Username'
                    onChange={(event) => {
                      setLoginUsername(event.target.value);
                    }}
                    />
                    </div>
                  </div>
                  <div className="inputDiv">
                    <label htmlFor='password'>Pasword</label>
                    <div className="input flex">
                    <FaUserLock className='icon'/>
                    <input type="password" id='password' placeholder='Enter Password'
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }} />
                    </div>
                  </div>
                    <button type='submit' className='btn-form flex' onClick={loginUser}>
                      <span>LOGIN</span>
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

export default LoginForm;