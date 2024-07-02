import React, { useState, useEffect } from 'react';
import MainContainer from './containers/MainContainer.jsx'; 

// Note: when importing a component, need '.jsx' because Node.js will not look for '.jsx' file without a file extension by default. Node.js will look for 'js', 'json', and 'node'. 

const App = () => {
  
  // // testing connection with backend using proxy
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   // Make a fetch request to the backend server
  //   fetch('/api/') // request to test route. Q: why can it be a relative path?
  //     .then(response => response.json()) // get response as JSON file
  //     .then(data => {
  //       setData(data);
  //       console.log(data);
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default App;