import React, { useState, useEffect } from 'react';

const App = () => {
  
  // testing connection with backend using proxy
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make a fetch request to the backend server
    fetch('/api/') // request to test route. Q: why can it be a relative path?
      .then(response => response.json()) // get response as JSON file
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>test message from App component</h1>
      <p> data is {data}</p>
    </div>
  );
};

export default App;