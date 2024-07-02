import React, { useState } from "react";

const ResourceCreator = () => {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    tag: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value // learn more about []
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api', { 
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if(response.ok) {
        console.log('resource saved successfully')
      } else {
        console.lor('failed to save resource')
      }
    } catch (error) {  
      console.log('error occured');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='input-wrapper'>
        <p>resource name</p>
        <input 
          type='text' 
          name='name'
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
        />
        <p>resource URL</p>
        <input 
          type='url' 
          name='url'
          placeholder='URL'
          value={FormData.url}
          onChange={handleChange}
        />
        <p>tag</p>
        <input 
          type='text' 
          name='tag'
          placeholder='Tag'
          value={formData.tag}
          onChange={handleChange}
        />
        <p>Save the resource</p>
        <input 
          type='submit' 
          value='Save' 
        />
      </div>
    </form>
  )
}

export default ResourceCreator;;