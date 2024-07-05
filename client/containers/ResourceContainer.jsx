import React, { useState, useEffect } from "react";

// import from chile component 
import Resource from "../components/Resource.jsx"; // will remove 

const ResourceContainer = (props) => {

  // triggerFetch state used as a trigger to run useEffect below
  const triggerFetch = props.triggerFetch;

  // create state
  const [resourceList, setResourceList] = useState([]);

  console.log('ResourceContainer is rendered')
  // fetch request to get all resources and store them to 'resourceList' 
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('/api');
        const result = await response.json();  
        setResourceList(result);
      } catch (error) {
        console.log('error fetching data');
      }
    };

    fetchData();
  }, [triggerFetch]);
  
  console.log('resource list is: ', resourceList);

  // create an array to store Resources components for each resource data (loop & push component to array)
  const resources = [];

  resourceList.forEach(resource => {
    resources.push(
      <Resource 
        key={resource.id}
        name={resource.name}
        url={resource.url}
        tag={resource.tag}
        note={resource.note}
      />
    )
  })

  return (
    <div className='inner'>
    <h1>your resources</h1>
    {resources}
  </div>
  )
}

export default ResourceContainer;