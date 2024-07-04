import React, { useState, useEffect } from "react";

const Resource = (props) => {
  // return each resource 
  const { id, name, url, tag, note } = props;

  return(
    <div className='resourceWrapper'>
      <p>name: {name}</p>
      <a href={url}>URL</a>
      <p>tag: {tag}</p>
      <p>note: {note}</p>
    </div>
  )

}

export default Resource;