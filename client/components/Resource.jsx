import React, { useState, useEffect } from "react";

const Resource = (props) => {
  // return each resource 
  const { id, name, url, tag } = props;

  return(
    <div className='resourceWrapper'>
      <p>name: {name}</p>
      <a href={url}>URL</a>
      <p>tag: {tag}</p>
    </div>
  )

}

export default Resource;