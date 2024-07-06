import React, { useState, useEffect } from 'react';

const Login = () => {
  // state of signupData (user input)
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })  

  // state of error message 
  const [errorMessage, setErrorMessage] = useState('');

  // handle change 
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })  
  }

  // handle submit 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginData.username.trim() || !loginData.password.trim()) {
      setErrorMessage('username and password cannot be empty!');
      return;
    }
    setErrorMessage('');

    try {
      const response = await fetch('/login', { 
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData), 
      });
      // access response object and redirect a user to a specified URL
      if (response.redirected) {
        window.location.href = response.url;
      } else if (response.ok) {
        setLoginData({
          username: '',
          password: '',
        })
      } else {
        console.log('failed to save resource')
      }
    } catch (error) {  
      console.log('error occured');
    }
  }

  return (
    <div className='container'>
      <div className='header'>
        <h1>Dev Resource Hub</h1>
        <p>Effortlessly Save and Organize Online Resources with Personalized Notes</p>
      </div>
      <div className='login'>
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>
          
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <div className='input-container'>
            <input 
              name='username'
              type='text'
              id='username'
              placeholder='username'
              value={loginData.username}
              onChange={handleChange}
            />
          </div>
          <div className='input-container'>
            <input 
              name='password'
              type='password'
              id='password'
              placeholder='password'
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <input 
            type='submit'
            value='LOGIN'
            className='btn'
          />
        </form>
        <a className='link' href='/signup'>Sign Up</a>
      </div>
    </div>
  )
}

export default Login;