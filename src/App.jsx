import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import ContactUsPage from './components/ContactUsPage';
import AboutUsPage from './components/AboutUsPage';
import AdoptPage from './components/AdoptPage';
import PetDetailsPage from './components/PetDetailsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import DonationsPage from './components/DonationsPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/adopt/:id" element={<PetDetailsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/donations" element={<DonationsPage />} /> {/* Donations Route */}
      </Routes>
    </Router>
  );
}

export default App;
