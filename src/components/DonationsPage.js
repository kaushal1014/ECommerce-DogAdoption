import React from 'react';
import Header from './Header';
import Footer from './Footer';
import donationQR from './donation.jpeg';

const DonationsPage = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      textAlign: 'center',
    },
    title: {
      fontSize: '32px',
      color: '#102C3E',
      marginBottom: '20px',
    },
    description: {
      fontSize: '18px',
      color: '#666',
      marginBottom: '40px',
      lineHeight: '1.6',
    },
    qrContainer: {
      maxWidth: '300px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    qrCode: {
      width: '100%',
      height: 'auto',
    },
    infoText: {
      fontSize: '16px',
      color: '#666',
      marginTop: '20px',
    },
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>Support Our Cause</h1>
        <p style={styles.description}>
          Your donation helps us continue our mission of connecting loving homes with pets in need. 
          Every contribution makes a difference in the lives of animals waiting for their forever homes.
        </p>
        <div style={styles.qrContainer}>
          <img 
            src={donationQR} 
            alt="Donation QR Code" 
            style={styles.qrCode}
          />
          <p style={styles.infoText}>
            Scan this QR code with Google Pay to make a donation
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonationsPage;