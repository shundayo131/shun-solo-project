import React from "react";

// import from chile component 
import ResourceCreator from "../components/ResourceCreator.jsx"

const AddContainer = (props) => {

  return (
    <div className='inner'>
      <ResourceCreator {...props} />
    </div>
  ) 
}

export default AddContainer;