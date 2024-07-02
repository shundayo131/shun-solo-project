import React from "react";

// import from chile component 
import ResourceCreator from "../components/ResourceCreator.jsx"

const AddContainer = () => {

  return (
    <div className='inner'>
      <p>add your resource</p>
      <ResourceCreator />
    </div>
  ) 
}

export default AddContainer;