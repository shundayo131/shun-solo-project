import React, { useState, useEffect } from "react";

// TODO: lift the state up to App, so that whenever a new resource is created, render 'resourceContainer' and show a new resource

const ResourceCreator = (props) => {

  const { setTriggerFetch } = props;

   // initialize state for input form 
   const [formData, setFormData] = useState({
    name: '',
    url: '',
    tag: '',
    note: '',
    user_id: '',
  });

  // initialize state for error message of input form 
  const [errorMessage, setErrorMessage] = useState('');

  // get user_id and update state
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('/api/user');
        const result = await response.json();  
        setFormData({
          ...formData,
          user_id: result,
        });
      } catch (error) {
        console.log('error fetching data');
      }
    };

    fetchData();
  }, []);


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
          ...formData,
          name: '',
          url: '',
          tag: '',
          note: '',
        })
        setTriggerFetch({
          trigger: '',
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
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='resource-creater'>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <div className='input-wrapper'>
            <div className='inputBox'>
              {/* <p>resource name: </p> */}
              <input 
                type='text' 
                name='name'
                id='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='inputBox'>
              {/* <p>resource URL: </p> */}
              <input 
                type='url' 
                name='url'
                id='url'
                placeholder='URL'
                value={FormData.url}
                onChange={handleChange}
              />
            </div>
            <div className='inputBox'>
              {/* <p>tag: </p> */}
              <input 
                type='text' 
                name='tag'
                id='tag'
                placeholder='Tag'
                value={formData.tag}
                onChange={handleChange}
              />
            </div>
            <textarea 
              type='text' 
              name='note'
              id='note'
              placeholder='Take a note...'
              value={formData.note}
              onChange={handleChange}
            />
            <input 
              type='submit' 
              value='Save' 
              className='btn'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ResourceCreator;;