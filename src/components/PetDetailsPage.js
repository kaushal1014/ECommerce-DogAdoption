import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PetDetailsPage = () => {
  const { id } = useParams(); // Retrieve the pet ID from the URL
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/products/${id}`); // Fetch pet details using the ID
        if (!response.ok) {
          throw new Error('Pet not found');
        }
        const data = await response.json();
        setPet(data); // Store the fetched pet data
        setLoading(false);
      } catch (error) {
        setError(error.message); // Handle error if the pet is not found
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]);

  if (loading) {
    return <div>Loading pet details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{pet.name}</h1>
      <div>
        {pet.image ? (
          <img src={pet.image} alt={pet.name} style={{ width: '100%', height: 'auto' }} />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <p>{pet.description}</p>
      <p>Price: ${pet.price}</p>
    </div>
  );
};

export default PetDetailsPage;
