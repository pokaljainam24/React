import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedName(input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={input}
        />
        <button type="submit">Submit Name</button>
      </form>

      {submittedName && (
        <p>You submitted: {submittedName}</p>
      )}
    </>
  );
}

export default App;
