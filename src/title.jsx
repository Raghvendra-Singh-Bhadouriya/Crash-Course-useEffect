import React, { useState, useEffect } from 'react';

function TitleUpdateComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
      document.title = `Count ${count}`
  },[count])

  function increaseCount(){
      setCount((prevcount) => prevcount + 1);
  }
  
  return(
      <>
      <h1>Document Title Updater</h1>
      <p>Count {count}</p>
      <button onClick={increaseCount}>Inc. Count</button>
      </>
  )
}

export default TitleUpdateComponent;

