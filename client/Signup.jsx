import React, { useState, useEffect } from 'react';

const Signup = () => {
  // state of signupData (user input)
  const [signupData, setSignupData] = useState({
    username: '',
    password: '',
  })

  // state of error message 
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    })  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!signupData.username.trim() || !signupData.password.trim()) {
      setErrorMessage('username and password cannot be empty!');
      return;
    }
    setErrorMessage('');

    try {
      const response = await fetch('/signup', { 
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData), 
      });
      // access response object and redirect a user to a specified URL
      if (response.redirected) {
        window.location.href = response.url;
      } else if (response.ok) {
        setSignupData({
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
    <div className='signup'>
      <h4>Sign up</h4>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <div className='input-container'>
          <input 
            name='username'
            type='text'
            id='username'
            placeholder='username'
            value={signupData.username}
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <input 
            name='password'
            type='password'
            id='password'
            placeholder='password'
            value={signupData.password}
            onChange={handleChange}
          />
        </div>
        <input 
          type='submit'
          value='SIGN UP'
          className='btn'
        />
      </form>
    </div>
  </div>
  );
};

export default Signup;