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
    <div>
      <h1>Login Page</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <input 
          name='username'
          type='text'
          placeholder='username'
          value={loginData.username}
          onChange={handleChange}
        />
        <input 
          name='password'
          type='text'
          placeholder='password'
          value={loginData.password}
          onChange={handleChange}
        />
        <input 
          type='submit'
          value='login'
        />
      </form>
    </div>
  )
}

export default Login;