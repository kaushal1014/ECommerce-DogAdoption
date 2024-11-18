import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicyPage = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    title: {
      fontSize: '32px',
      color: '#333',
      marginBottom: '20px',
      textAlign: 'center',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '24px',
      color: '#444',
      marginBottom: '15px',
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#666',
      marginBottom: '15px',
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '15px',
    },
    listItem: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#666',
      marginBottom: '10px',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>Privacy Policy</h1>
        
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Introduction</h2>
          <p style={styles.paragraph}>
            Welcome to Pawpal's Privacy Policy. This policy describes how Pawpal ("we", "our", or "us") collects, uses, and protects your personal information when you use our website and services.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>2. Information We Collect</h2>
          <p style={styles.paragraph}>We may collect the following types of information:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Personal information (e.g., name, email address, phone number)</li>
            <li style={styles.listItem}>Usage data (e.g., IP address, browser type, pages visited)</li>
            <li style={styles.listItem}>Pet adoption preferences and history</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>3. How We Use Your Information</h2>
          <p style={styles.paragraph}>We use your information to:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Facilitate pet adoptions</li>
            <li style={styles.listItem}>Improve our services</li>
            <li style={styles.listItem}>Communicate with you about our services and promotions</li>
            <li style={styles.listItem}>Comply with legal obligations</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Data Security</h2>
          <p style={styles.paragraph}>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>5. Your Rights</h2>
          <p style={styles.paragraph}>
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at privacy@pawpal.com.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>6. Changes to This Policy</h2>
          <p style={styles.paragraph}>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>7. Contact Us</h2>
          <p style={styles.paragraph}>
            If you have any questions about this privacy policy, please contact us at privacy@pawpal.com or through our <Link to="/contact" style={styles.link}>contact page</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;