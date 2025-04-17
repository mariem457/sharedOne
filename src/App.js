import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/DonatePage';
import LoginPage from './pages/LoginPage';
import ThankYouPage from './pages/ThankYouPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Donor from './pages/Donor';
<<<<<<< HEAD
import PrivateRoute from './pages/PrivateRoute'; 
import ForgotPasswordPage from './pages/ForgotPasswordPage';

=======
import DonationAppointment from './pages/DonationAppointment';
import AboutDonation from './pages/AboutDonation';
import BecomeDonor from './pages/BecomeDonor';
import PrivateRoute from './pages/PrivateRoute'; // 👈 Import
>>>>>>> c1bd5f40 (Ajouter les fonctionnalite de buttons)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
<<<<<<< HEAD
        
         <Route path="/forgot" element={<ForgotPasswordPage/>}/>
         
=======
        <Route path="/donation-appointment" element={<DonationAppointment />} />
        <Route path="/become-donor" element={<BecomeDonor />} />
        <Route path="/about-donation" element={<AboutDonation />} />
        {/* 🔐 Route protégée */}
>>>>>>> c1bd5f40 (Ajouter les fonctionnalite de buttons)
        <Route
          path="/donor"
          element={
            <PrivateRoute roleAllowed="Donor">
              <Donor />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
