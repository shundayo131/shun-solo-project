import React, { useState, useEffect } from 'react';
import MainContainer from './containers/MainContainer.jsx'; 

// Note: when importing a component, need '.jsx' because Node.js will not look for '.jsx' file without a file extension by default. Node.js will look for 'js', 'json', and 'node'. 

const App = () => {
  
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default App;