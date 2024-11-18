import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdoptPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products'); // Backend endpoint
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

  if (loading) {
    return <div>Loading pets...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Adopt a Pet</h1>
      <div style={styles.petGrid}>
        {pets.map((pet) => (
          <div key={pet._id} style={styles.petCard}>
            <div style={styles.petImage}>
              {pet.image ? (
                <img
                src={`http://localhost:4000/${pet.image}`} 
                alt={pet.name}
                style={{ width: '100%', height: 'auto' }}
              />
              ) : (
                'No Image Available'
              )}
            </div>
            <h3>{pet.name}</h3>
            <p>{pet.description}</p>
            <p>Price: ${pet.price}</p>
            <Link to={`/adopt/${pet._id}`} style={styles.adoptButton}>
              Adopt Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  petGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  petCard: {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  petImage: {
    marginBottom: '10px',
    height: '200px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  adoptButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '10px',
  },
};

export default AdoptPage;
