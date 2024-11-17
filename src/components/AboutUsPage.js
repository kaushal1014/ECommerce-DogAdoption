import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUsPage = () => {
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
    section: {
      marginBottom: '40px',
    },
    sectionTitle: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    paragraph: {
      lineHeight: '1.6',
      marginBottom: '15px',
    },
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>About Pawpal</h1>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.paragraph}>
            At Pawpal, our mission is to connect loving homes with pets in need. We believe that every animal deserves a chance at a happy life, and we're dedicated to making that happen through our adoption platform.
          </p>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Who We Are</h2>
          <p style={styles.paragraph}>
            Pawpal is a team of passionate animal lovers, tech enthusiasts, and dedicated volunteers. We came together with a shared vision of using technology to solve the challenges faced by animal shelters and rescue organizations.
          </p>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>What We Do</h2>
          <p style={styles.paragraph}>
            We provide a user-friendly platform that connects potential pet owners with animals in need of homes. Our service includes detailed pet profiles, adoption guidance, and post-adoption support to ensure successful matches and happy pets.
          </p>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Impact</h2>
          <p style={styles.paragraph}>
            Since our founding, we've helped thousands of pets find their forever homes. We work closely with shelters and rescue organizations across the country to maximize our reach and impact.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;