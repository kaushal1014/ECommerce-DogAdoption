import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PetDetailsPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Pet not found');
        }
        const data = await response.json();
        setPet(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]);

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '28px',
      color: '#333',
      marginBottom: '20px',
      textAlign: 'center',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    description: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#666',
      marginBottom: '20px',
    },
    price: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#007bff',
      marginBottom: '20px',
    },
    adoptButton: {
      display: 'inline-block',
      padding: '12px 24px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      textAlign: 'center',
      transition: 'background-color 0.3s',
    },
    backLink: {
      display: 'inline-block',
      marginTop: '20px',
      color: '#007bff',
      textDecoration: 'none',
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
    return <div style={styles.loading}>Loading pet details...</div>;
  }

  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>{pet.name}</h1>
        <div style={styles.imageContainer}>
          {pet.image ? (
            <img
              src={`http://localhost:4000/${pet.image}`}
              alt={pet.name}
              style={styles.image}
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <p style={styles.description}>{pet.description}</p>
        <p style={styles.price}>Price: ${pet.price}</p>
        <Link to="/contact" style={styles.adoptButton}>
          Adopt {pet.name}
        </Link>
        <div>
          <Link to="/adopt" style={styles.backLink}>
            &larr; Back to all pets
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PetDetailsPage;