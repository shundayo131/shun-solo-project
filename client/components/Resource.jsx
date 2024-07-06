import React, { useState, useEffect } from "react";

const Resource = (props) => {
  // return each resource 
  const { id, name, url, tag, note } = props;

  return(
    <div className='resource-box'>
      <p className='title'>{name}</p>
      <p className='note'>{note}</p>
      <p>tag: {tag}</p>
      <a href={url}>See more</a>
    </div>
  )
}

export default Resource;