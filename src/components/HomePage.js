import React from 'react';
import { Link } from 'react-router-dom';
import { Filter, Box, Search } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
    },
    searchSection: {
      marginBottom: '60px',
    },
    searchTitle: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#102C3E',
    },
    searchDescription: {
      fontSize: '18px',
      color: '#666',
      maxWidth: '600px',
      marginBottom: '30px',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      marginBottom: '60px',
    },
    featureBox: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    featureIcon: {
      backgroundColor: '#102C3E',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      display: 'inline-flex',
      marginBottom: '20px',
    },
    featureTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#102C3E',
    },
    featureDescription: {
      color: '#666',
      lineHeight: '1.5',
    },
    buttonGroup: {
      display: 'flex',
      gap: '15px',
      justifyContent: 'center',
      marginTop: '20px',
    },
    primaryButton: {
      backgroundColor: '#102C3E',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    secondaryButton: {
      backgroundColor: 'white',
      color: '#102C3E',
      padding: '12px 24px',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: 'bold',
      border: '2px solid #102C3E',
    },
    bottomSection: {
      textAlign: 'center',
      padding: '60px 0',
      backgroundColor: '#f5f5f5',
    },
    bottomTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#102C3E',
    },
    bottomDescription: {
      color: '#666',
      marginBottom: '30px',
    },
  };

  return (
    <div>
      <Header />
      <main>
        <div style={styles.container}>
          <section style={styles.searchSection}>
            <h1 style={styles.searchTitle}>Find Your Perfect Pet in Seconds</h1>
            <p style={styles.searchDescription}>
              Looking for a furry friend? Our quick search bar allows you to filter pets by type, making it easier than ever to find the companion that fits your lifestyle. Start your journey to pet adoption today!
            </p>
          </section>

          <div style={styles.featuresGrid}>
            <div style={styles.featureBox}>
              <div style={styles.featureIcon}>
                <Box size={24} />
              </div>
              <h2 style={styles.featureTitle}>Discover Pets That Match Your Preferences</h2>
              <p style={styles.featureDescription}>Tailor your search to find your ideal match.</p>
            </div>

            <div style={styles.featureBox}>
              <div style={styles.featureIcon}>
                <Filter size={24} />
              </div>
              <h2 style={styles.featureTitle}>Easily Find the pets that you want</h2>
              <p style={styles.featureDescription}>Choose from dogs, cats, and more.</p>
              <div style={styles.buttonGroup}>
                <Link to="/adopt" style={styles.primaryButton}>Search</Link>
                <Link to="/Contact" style={styles.secondaryButton}>Queries</Link>
              </div>
            </div>

            <div style={styles.featureBox}>
              <div style={styles.featureIcon}>
                <Search size={24} />
              </div>
              <h2 style={styles.featureTitle}>Start Your Search for a New Friend</h2>
              <p style={styles.featureDescription}>Use our adoption page to get started</p>
            </div>
          </div>
        </div>

        <div style={styles.bottomSection}>
          <div style={styles.container}>
            <h2 style={styles.bottomTitle}>Find Your Perfect Pet Today</h2>
            <p style={styles.bottomDescription}>Explore our listings and adopt a furry friend!</p>
            <div style={styles.buttonGroup}>
              <Link to="/adopt" style={styles.primaryButton}>Explore</Link>
              <Link to="/about" style={styles.secondaryButton}>Learn More</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;