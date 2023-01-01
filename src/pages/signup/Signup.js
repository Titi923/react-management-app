import { useState } from 'react';

// styles & icons
import './Signup.css';
import uploadIcon from '../../assets/upload_icon.svg';

export default function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(displayName, email, password);
    
    setDisplayName('')
    setEmail('')
    setPassword('')
    setThumbnail(null)
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="text-center">Sign up</h2>
      <label>
        <span>Display Name:</span>
        <input
          required
          type="displayName"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
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
      <label>
        <span>Upload Thumbnail:</span>
        <label class="custom-file-upload">
          <img src={uploadIcon} alt="upload icon" />Choose Photo
          <input  type="file" />
        </label>
      </label>
      <button className="btn">Signup</button>
    </form>
  );
}
