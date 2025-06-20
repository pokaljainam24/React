import React, { useState } from 'react'
import Child from './components/Child';

function App() {
  const [count, setCount] = useState(0);
  const [parentCount, setParentCount] = useState(0);
  console.log('parent');

  return (
    <>
      <Child count={count} setCount={setCount} />
      <button onClick={() => setParentCount(parentCount + 1)} className='btn btn-light'>Parent</button>
    </>
  )
}

export default App
