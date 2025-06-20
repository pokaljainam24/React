import React from 'react';
import Signup from './components/Signup';
import UserData from './components/UserData';

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <Signup />
        </div>
        <div className="col-md-8">
          <UserData />
        </div>
      </div>
    </div>
  );
}

export default App;
