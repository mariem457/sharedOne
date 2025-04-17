import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/DonatePage';
import LoginPage from './pages/LoginPage';
import ThankYouPage from './pages/ThankYouPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Donor from './pages/Donor';
import PrivateRoute from './pages/PrivateRoute'; 
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import FAQ from './pages/FAQ';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        
         <Route path="/forgot" element={<ForgotPasswordPage/>}/>
         
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
