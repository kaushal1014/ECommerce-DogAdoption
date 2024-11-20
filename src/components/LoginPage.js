import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import pawpalLogo from './pawpallogo.jpeg'; 

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:4000/login', formData);
      navigate('/');
      console.log('Login successful:', response.data);
      alert('Login successful!');
      setFormData({ email: '', password: '' });
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      height: '100vh',
      margin: 0,
      padding: 0,
    },
    leftPanel: {
      flex: 1,
      backgroundColor: '#102C3E', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    },
    rightPanel: {
      flex: 1,
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    title: {
      fontSize: '28px',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ddd',
    },
    button: {
      padding: '12px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
    },
    signupLink: {
      marginTop: '20px',
      textAlign: 'center',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <img src={pawpalLogo} alt="Pawpal Logo" width="200" height="200" /> 
      </div>
      <div style={styles.rightPanel}>
        <div style={styles.logo}>Pawpal</div>
        <h1 style={styles.title}>Login to your account</h1>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button} disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p style={styles.signupLink}>
          Don't have an account? <Link to="/signup" style={styles.link}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
