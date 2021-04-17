import React, { useState } from 'react';

function SignUp() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = event => {
    event.preventDefault();
    setPassword('');
    setEmail('');
    setDisplayName('');
  };


    return (
      <form className="SignUp" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={displayName}
          onChange={e => {setDisplayName(e.target.value)}}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => {setEmail(e.target.value)}}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => {setPassword(e.target.value)}}
        />
        <input type="submit" value="Sign Up" />
      </form>
    );
  }

export default SignUp;
