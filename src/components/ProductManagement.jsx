import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "http://localhost:4000/api/products";

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (Create/Update product)
  const handleSubmit = async (e) => {
    try {
      if (editingId) {
        console.log(editingId);
        // Update Product
        await axios.put(`http://localhost:4000/api/products/${editingId}`, formData);
        alert("Product updated successfully!");
      } else {
        // Create Product
        await axios.post(apiUrl, formData);
        alert("Product created successfully!");
      }
      setFormData({ name: "", description: "", image: "", price: "" });
      setEditingId(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:4000/api/products/${id}`);
        alert("Product deleted successfully!");
        setProducts(products.filter((product) => product._id !== id)); // Optimistic update
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  // Handle edit
  const handleEdit = (product) => {
    setEditingId(product._id);
    setFormData({
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
    });
  };

  // Loading, Error Handling, and UI
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
    },
    title: {
      fontSize: "32px",
      color: "#333",
      textAlign: "center",
      marginBottom: "40px",
    },
    form: {
      marginBottom: "30px",
    },
    input: {
      padding: "10px",
      margin: "10px 0",
      width: "100%",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "5px",
    },
    loading: {
      textAlign: "center",
      fontSize: "18px",
      color: "#666",
    },
    error: {
      textAlign: "center",
      fontSize: "18px",
      color: "#ff0000",
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "30px",
      padding: "20px",
    },
    productCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    productImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "15px",
    },
    productName: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "10px",
    },
    productDescription: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "15px",
    },
    productPrice: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#007bff",
      marginBottom: "15px",
    },
  };

  if (loading) {
    return <div style={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product Management</h1>

      {/* Form for Create/Update */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          {editingId ? "Update" : "Create"} Product
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setFormData({ name: "", description: "", image: "", price: "" });
            }}
            style={styles.button}
          >
            Cancel
          </button>
        )}
      </form>

      {/* Product List */}
      <div style={styles.productGrid}>
        {products.map((product) => (
          <div key={product._id} style={styles.productCard}>
            <div>
              {product.image ? (
                <img
                  src={`${product.image}`}
                  alt={product.name}
                  style={styles.productImage}
                />
              ) : (
                <div
                  style={{
                    ...styles.productImage,
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  No Image Available
                </div>
              )}
            </div>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>Price: ${product.price}</p>
            <button
              onClick={() => handleEdit(product)}
              style={styles.button}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(product._id)}
              style={styles.button}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
