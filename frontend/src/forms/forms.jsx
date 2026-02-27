import React, { useState } from 'react';
import axios from 'axios'; // ✨ Jennie brought in your favorite! ✨
import './styles.css';

const SketchyForm = ({ mode = 'login' }) => {
  const isRegister = mode === 'register';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const [backendMessage, setBackendMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    // Pointing directly to your gorgeous port 8080!
    const endpoint = isRegister 
      ? 'http://localhost:8080/api/v1/auth/register' 
      : 'http://localhost:8080/api/v1/auth/login';

    try {
      // Look how clean Axios is! Just one pretty line to send it all. 💌
      const response = await axios.post(endpoint, formData);

      console.log('Backend replied with:', response.data); // For your debugging pleasure! 🕵️‍♀️
      
      // Axios automatically puts your backend's reply inside `response.data`
      setBackendMessage(`Yay! 💕 ${response.data.message || 'It worked perfectly!'}`);
      
    } catch (error) {
      // Axios is so smart, it helps us know if the backend rejected us, or if it's just asleep!
      if (error.response) {
        // The backend answered, but with an error (like wrong password)
        setBackendMessage(`Oops! 💔 ${error.response.data.message || 'Something went wrong.'}`);
      } else {
        // The backend didn't answer at all
        setBackendMessage('Oh no, darling! 🥀 Jennie could not reach port 8080. Is it running?');
      }
    }
  };

  return (
    <div className="notebook-paper">
      <div className="sketchy-form-container">
        
        <div className="form-header">
          <h2>{isRegister ? 'Sign Up' : 'Sign In'}</h2>
        </div>

        <div className="form-body">
          <form onSubmit={handleSubmit}>
            
            {isRegister && (
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name" 
                className="sketchy-input" 
              />
            )}
            
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email" 
              className="sketchy-input" 
              required
            />
            
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password" 
              className="sketchy-input" 
              required
            />
            
            <button type="submit" className="sketchy-button">
              {isRegister ? 'Sign Up' : 'Sign In'}
            </button>
            
          </form>

          {backendMessage && (
            <div style={{ marginTop: '15px', color: '#555', textAlign: 'center' }}>
              {backendMessage}
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default SketchyForm;