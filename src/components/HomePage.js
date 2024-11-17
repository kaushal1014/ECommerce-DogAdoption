// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const styles = {
    hero: {
      backgroundColor: '#f0f0f0',
      padding: '60px 20px',
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: '36px',
      marginBottom: '20px',
    },
    heroText: {
      fontSize: '18px',
      maxWidth: '600px',
      margin: '0 auto 30px',
    },
    button: {
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '5px',
      fontSize: '18px',
    },
    featuredPets: {
      padding: '40px 20px',
      textAlign: 'center',
    },
    featuredTitle: {
      fontSize: '28px',
      marginBottom: '20px',
    },
    petGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    petCard: {
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '20px',
    },
    petImage: {
      width: '100%',
      height: '200px',
      backgroundColor: '#f0f0f0',
      marginBottom: '10px',
    },
  };

  return (
    <div>
      <Header />
      <main>
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>Find Your Perfect Pet Today!</h1>
          <p style={styles.heroText}>
            At PawPal, we are dedicated to connecting loving homes with pets in need. 
            Explore our listings and discover the joy of pet adoption.
          </p>
          <Link to="/adopt" style={styles.button}>Adopt Now</Link>
        </section>
        <section style={styles.featuredPets}>
          <h2 style={styles.featuredTitle}>Featured Pets</h2>
          <div style={styles.petGrid}>
            {[1, 2, 3, 4].map((pet) => (
              <div key={pet} style={styles.petCard}>
                <div style={styles.petImage}></div>
                <h3>Pet Name</h3>
                <p>Breed, Age</p>
                <Link to={`/pet/${pet}`} style={{...styles.button, fontSize: '16px'}}>Learn More</Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;