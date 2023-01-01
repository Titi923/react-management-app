import { useState } from 'react';

// styles
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="text-center">Login</h2>
      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className='btn'>login</button>
      {/* {!isPending && <button className="btn">Login</button> }
      {isPending && <button className="btn" disabled>Loading...</button> }
      {error && <div className='error'>{error}</div> } */}
    </form>
  )
}
