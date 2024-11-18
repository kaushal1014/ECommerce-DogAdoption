import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const TermsOfServicePage = () => {
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
        <h1 style={styles.title}>Terms of Service</h1>
        
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Acceptance of Terms</h2>
          <p style={styles.paragraph}>
            By accessing or using the Pawpal website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>2. Use of Services</h2>
          <p style={styles.paragraph}>You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Use our services in any way that violates any applicable laws or regulations</li>
            <li style={styles.listItem}>Impersonate or attempt to impersonate Pawpal, a Pawpal employee, or another user</li>
            <li style={styles.listItem}>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the services</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>3. User Accounts</h2>
          <p style={styles.paragraph}>
            When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Pet Adoption Process</h2>
          <p style={styles.paragraph}>
            Pawpal facilitates pet adoptions but is not responsible for the actions of individual users or shelters. All adoptions are subject to approval by the relevant shelter or rescue organization.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>5. Intellectual Property</h2>
          <p style={styles.paragraph}>
            The content, features, and functionality of our services are owned by Pawpal and are protected by copyright, trademark, and other intellectual property laws.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>6. Limitation of Liability</h2>
          <p style={styles.paragraph}>
            Pawpal shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>7. Changes to Terms</h2>
          <p style={styles.paragraph}>
            We may revise these Terms of Service at any time without notice. By using our services, you agree to be bound by the current version of these Terms.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>8. Contact Us</h2>
          <p style={styles.paragraph}>
            If you have any questions about these Terms of Service, please contact us at legal@pawpal.com or through our <Link to="/contact" style={styles.link}>contact page</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;