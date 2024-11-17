import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Message sent! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    form: {
      display: 'grid',
      gap: '20px',
    },
    inputGroup: {
      display: 'flex',
      gap: '20px',
    },
    input: {
      flex: 1,
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ddd',
    },
    select: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ddd',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      minHeight: '150px',
    },
    button: {
      padding: '12px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Us</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="">Select Subject</option>
            <option value="adoption">Adoption Inquiries</option>
            <option value="volunteer">Volunteer Inquiries</option>
            <option value="support">Support & Feedback</option>
            <option value="donation">Donation & Support</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;