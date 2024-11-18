import React from 'react';
import { Link } from 'react-router-dom';
import pawpalLogo from './pawpallogo.jpeg'; 

const Header = () => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#102C3E', 
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
    },
    nav: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      textDecoration: 'none',
      color: '#fff', 
    },
    logoImage: {
      marginRight: '10px',
      width: '30px', 
      height: '30px',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src={pawpalLogo} alt="Pawpal Logo" style={styles.logoImage} />
        Pawpal
      </div>
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
