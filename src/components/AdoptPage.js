
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AdoptPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch pets');
        }
        const data = await response.json();
        setPets(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    title: {
      fontSize: '32px',
      color: '#333',
      textAlign: 'center',
      marginBottom: '40px',
    },
    petGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '30px',
      padding: '20px',
    },
    petCard: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s',
      ':hover': {
        transform: 'translateY(-5px)',
      },
    },
    petImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '15px',
    },
    petName: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
    },
    petDescription: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '15px',
    },
    petPrice: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#007bff',
      marginBottom: '15px',
    },
    adoptButton: {
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    loading: {
      textAlign: 'center',
      fontSize: '18px',
      color: '#666',
    },
    error: {
      textAlign: 'center',
      fontSize: '18px',
      color: '#ff0000',
    },
  };

  if (loading) {
    return <div style={styles.loading}>Loading pets...</div>;
  }

  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>Adopt a Pet</h1>
        <div style={styles.petGrid}>
          {pets.map((pet) => (
            <div key={pet._id} style={styles.petCard}>
              <div>
                {pet.image ? (
                  <img
                    src={`${pet.image}`}
                    alt={pet.name}
                    style={styles.petImage}
                  />
                ) : (
                  <div style={{...styles.petImage, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    No Image Available
                  </div>
                )}
              </div>
              <h3 style={styles.petName}>{pet.name}</h3>
              <p style={styles.petDescription}>{pet.description}</p>
              <p style={styles.petPrice}>Price: ${pet.price}</p>
              <Link to={`/adopt/${pet._id}`} style={styles.adoptButton}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdoptPage;
