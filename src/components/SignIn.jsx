import React, { useState } from 'react';

function SignIn()  {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  

  const handleSubmit = event => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  };

    return (
      <form className="SignIn" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />
        <input type="submit" value="Sign In" />
        <button>Sign In With Google</button>
      </form>
    );
  }


export default SignIn;
