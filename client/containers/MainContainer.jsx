import React, { useState } from "react";
import AddContainer from "./AddContainer.jsx";
import ResourceContainer from "./ResourceContainer.jsx";
import Header from "../components/Header.jsx"

const MainContainer = () => {

  // set triggerFetch state 
  const [triggerFetch, setTriggerFetch] = useState({
    trigger: '',
  })

  return (
    <div className="container">
      <Header />
      <AddContainer 
        setTriggerFetch={setTriggerFetch}
      />
      <ResourceContainer 
        triggerFetch={triggerFetch}
      />
    </div>
  )
}

export default MainContainer;