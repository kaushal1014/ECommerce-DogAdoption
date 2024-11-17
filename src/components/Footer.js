// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#f8f8f8',
      padding: '20px',
      marginTop: '40px',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    section: {
      flex: 1,
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    link: {
      display: 'block',
      color: '#333',
      textDecoration: 'none',
      marginBottom: '5px',
    },
    copyright: {
      textAlign: 'center',
      marginTop: '20px',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.title}>Quick links</h3>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/adopt" style={styles.link}>Adopt Now</Link>
          <Link to="/about" style={styles.link}>About Us</Link>
          <Link to="/contact" style={styles.link}>Contact Us</Link>
        </div>
        <div style={styles.section}>
          <h3 style={styles.title}>Company</h3>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/careers" style={styles.link}>Careers</Link>
          <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
          <Link to="/terms" style={styles.link}>Terms of Service</Link>
        </div>
        <div style={styles.section}>
          <h3 style={styles.title}>Connect with us</h3>
          <a href="https://facebook.com" style={styles.link}>Facebook</a>
          <a href="https://instagram.com" style={styles.link}>Instagram</a>
          <a href="https://twitter.com" style={styles.link}>Twitter</a>
          <a href="https://tiktok.com" style={styles.link}>TikTok</a>
        </div>
      </div>
      <div style={styles.copyright}>
        © {new Date().getFullYear()} Pawpal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;