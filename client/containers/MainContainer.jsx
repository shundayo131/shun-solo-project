import React from "react";
import AddContainer from "./AddContainer.jsx";

const MainContainer = () => {

  return (
    <div className="container">
      <div className="outer">
        <h1 id='header'>My application</h1>
        {/* add components here */}
        <AddContainer />
      </div>
    </div>
  )
}

export default MainContainer;