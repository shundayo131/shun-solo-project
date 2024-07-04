import React from "react";
import AddContainer from "./AddContainer.jsx";
import ResourceContainer from "./ResourceContainer.jsx";

const MainContainer = () => {

  return (
    <div className="container">
      <div className="outer">
        <h1 id='header'>My application</h1>
        {/* add header */}
        <AddContainer />
        <ResourceContainer />
      </div>
    </div>
  )
}

export default MainContainer;