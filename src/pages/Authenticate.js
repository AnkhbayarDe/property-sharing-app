import React from 'react';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

const Authenticate = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h2>Sign Up</h2>
        <SignUp />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Sign In</h2>
        <SignIn />
      </div>
    </div>
  );
};

export default Authenticate;
