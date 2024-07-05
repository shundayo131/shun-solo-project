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
    <div>
      <h1>Sign up</h1>
      <form className='signup-form' onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <input 
          name='username'
          type='text'
          placeholder='username'
          value={signupData.username}
          onChange={handleChange}
        />
        <input 
          name='password'
          type='text'
          placeholder='password'
          value={signupData.password}
          onChange={handleChange}
        />
        <input 
          type='submit'
          value='sign up'
        />
      </form>
    </div>
  );
};

export default Signup;