// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f8f8f8',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    nav: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      textDecoration: 'none',
      color: '#333',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Pawpal</div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/adopt" style={styles.link}>Adopt Now</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
        <Link to="/contact" style={styles.link}>Contact Us</Link>
        <Link to="/signup" style={styles.link}>Sign Up</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;