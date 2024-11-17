import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AdoptPage = () => {
  const [pets] = useState([
    { id: 1, name: 'Buddy', type: 'Dog', breed: 'Golden Retriever', age: 3 },
    { id: 2, name: 'Whiskers', type: 'Cat', breed: 'Siamese', age: 2 },
    { id: 3, name: 'Rex', type: 'Dog', breed: 'German Shepherd', age: 5 },
    { id: 4, name: 'Fluffy', type: 'Cat', breed: 'Persian', age: 4 },
    { id: 5, name: 'Max', type: 'Dog', breed: 'Labrador', age: 1 },
    { id: 6, name: 'Luna', type: 'Cat', breed: 'Maine Coon', age: 3 },
  ]);

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    petGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
    },
    petCard: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
    },
    petImage: {
      width: '100%',
      height: '200px',
      backgroundColor: '#f0f0f0',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '48px',
      color: '#999',
    },
    button: {
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '4px',
      marginTop: '10px',
    },
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>Adopt a Pet</h1>
        <div style={styles.petGrid}>
          {pets.map((pet) => (
            <div key={pet.id} style={styles.petCard}>
              <div style={styles.petImage}>
                {pet.type === 'Dog' ? '🐶' : '🐱'}
              </div>
              <h2>{pet.name}</h2>
              <p>{pet.breed}</p>
              <p>Age: {pet.age} years</p>
              <Link to={`/pet/${pet.id}`} style={styles.button}>Learn More</Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdoptPage;