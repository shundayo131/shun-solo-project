import React, { useState, useEffect } from "react";

const Header = (props) => {
  // create a state of userInfo 
  const [ userInfo, setUserInfo ] = useState({
    name: '',
  });

  useEffect(() => {
    const fetchName = async() => {
      try {
        const response = await fetch('/api/username');
        const result = await response.json();  
        setUserInfo({
          name: result, 
        });
      } catch (error) {
        console.log('error fetching data');
      }
    };

    fetchName();
  }, []);
  
  // get user name 
  const name = userInfo.name;

  return(
    <div className='header'>
      <p className='username'>Welcome {name}!</p>
    </div>
  )
}

export default Header;