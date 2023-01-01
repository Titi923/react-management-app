import { useState } from 'react';

// styles & icons
import './Signup.css';
import uploadIcon from '../../assets/upload_icon.svg';

export default function Signup() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0]
    console.log(selected);

    if (!selected) {
      setThumbnailError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }
    if (selected.size > 100000) {
      setThumbnailError('Image file size must be less than 100KB (0.1MB)')
      return
    }
    
    setThumbnailError(null)
    setThumbnail(selected)
    console.log('Thumbnail updated');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(displayName, email, password, thumbnail.name);
    
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
        <label className="custom-file-upload">
          <img src={uploadIcon} alt="upload icon" />Choose Photo
          <input
            type="file"
            onChange={handleFileChange}
            style={{display: "none"}}
          />
          {thumbnailError && <div className='error text-center'>{thumbnailError}</div>}
          {thumbnail && <div className='selected-photo'>{thumbnail.name}</div>}
        </label>
      </label>
      <button className="btn">Signup</button>
    </form>
  );
}
