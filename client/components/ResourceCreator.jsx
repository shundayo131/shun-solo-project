import React, { useState } from "react";

const ResourceCreator = () => {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    tag: '',
    note: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value // learn more about []
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.url.trim()) {
      setErrorMessage('Name and URL cannot be empty!');
      return;
    }
    setErrorMessage('');

    try {
      const response = await fetch('/api', { 
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if(response.ok) {
        setFormData({
          name: '',
          url: '',
          tag: '',
          note: '',
        })
        console.log('resource saved successfully')
      } else {
        console.log('failed to save resource')
      }
    } catch (error) {  
      console.log('error occured');
    }
  };
  
  return (
    <form className='input-form' onSubmit={handleSubmit}>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div className='input-wrapper'>
        <div className='inputBox'>
          <p>resource name: </p>
          <input 
            type='text' 
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='inputBox'>
          <p>resource URL: </p>
          <input 
            type='url' 
            name='url'
            placeholder='URL'
            value={FormData.url}
            onChange={handleChange}
          />
        </div>
        <div className='inputBox'>
          <p>tag: </p>
          <input 
            type='text' 
            name='tag'
            placeholder='Tag'
            value={formData.tag}
            onChange={handleChange}
          />
        </div>
        <div className='inputBox'>
          <p>note: </p>
          <input 
            type='text' 
            name='note'
            placeholder='note'
            value={formData.note}
            onChange={handleChange}
          />
        </div>
        <input 
          type='submit' 
          value='Save' 
        />
      </div>
    </form>
  )
}

export default ResourceCreator;;