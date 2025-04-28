import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages publiques
import HomePage from './pages/HomePage';
import SignupPage from './pages/DonatePage';
import LoginPage from './pages/LoginPage';
import ThankYouPage from './pages/ThankYouPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import FAQ from './pages/FAQ';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DonationAppointment from './pages/DonationAppointment';
import AboutDonation from './pages/AboutDonation';
import BecomeDonor from './pages/BecomeDonor';

// Pages protégées
import PrivateRoute from './pages/PrivateRoute';
import Donor from './pages/Donor';
import Dashboard from './pages/Dashboard';
import DonorDashboard from './pages/DonorDashboard';
import CenterDashboard from './pages/CenterDashboard'; // Centre de transfusion
import CenterNavbar from './pages/Navbar2'; // Navbar pour le Centre de transfusion
import Stocks from './pages/Stocks';
import Dons from './pages/Dons';
import Distribution from './pages/Distribution';
import Demandes from './pages/Demandes';
import RendezVous from './pages/RendezVous2';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/donation-appointment" element={<DonationAppointment />} />
        <Route path="/become-donor" element={<BecomeDonor />} />
        <Route path="/about-donation" element={<AboutDonation />} />

        {/* Routes protégées pour Donneur */}
        <Route
          path="/donor"
          element={
            <PrivateRoute roleAllowed="Donor">
              <Donor />
            </PrivateRoute>
          }
        />

     {/* Dashboard pour Admin */}
<Route
  path="/admin-dashboard"
  element={
    <PrivateRoute allowedRoles={['Admin']}>
      <Dashboard />
    </PrivateRoute>
  }
/>

        {/* Dashboard pour Donneur */}
        <Route path="/donor-dashboard" element={<DonorDashboard />} />

        {/* Routes pour Centre de Don */}
        <Route
          path="/center-dashboard"
          element={
            <>
              {/* Si vous ne voulez pas le navbar ici, supprimez <CenterNavbar /> */}
              <CenterNavbar />
              <div className="main-content">
                <CenterDashboard />
              </div>
            </>
          }
        />
        <Route
          path="/stocks"
          element={
            <>
              <CenterNavbar />
              <div className="main-content">
                <Stocks />
              </div>
            </>
          }
        />
        <Route
          path="/dons"
          element={
            <>
              <CenterNavbar />
              <div className="main-content">
                <Dons />
              </div>
            </>
          }
        />
        <Route
          path="/distribution"
          element={
            <>
              <CenterNavbar />
              <div className="main-content">
                <Distribution />
              </div>
            </>
          }
        />
        <Route
          path="/demandes"
          element={
            <>
              <CenterNavbar />
              <div className="main-content">
                <Demandes />
              </div>
            </>
          }
        />
        <Route
          path="/rendezvous"
          element={
            <>
              <CenterNavbar />
              <div className="main-content">
                <RendezVous />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
