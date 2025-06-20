import React, { memo } from 'react'

function Child({ setCount, count }) {
    console.log('child');
    
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Child</button>
        </>
    )
}

export default memo(Child)
