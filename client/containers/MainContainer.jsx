import React, { useState } from "react";
import AddContainer from "./AddContainer.jsx";
import ResourceContainer from "./ResourceContainer.jsx";

const MainContainer = () => {

  // set triggerFetch state 
  const [triggerFetch, setTriggerFetch] = useState({
    trigger: '',
  })

  return (
    <div className="container">
      <div className="outer">
        <h1 id='header'>My application</h1>
        {/* add header */}
        <AddContainer 
          setTriggerFetch={setTriggerFetch}
        />
        <ResourceContainer 
          triggerFetch={triggerFetch}
        />
      </div>
    </div>
  )
}

export default MainContainer;