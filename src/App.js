import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './pages/PrivateRoute';
import DonorDashboard from './pages/DonorDashboard';
import CenterNavbar from './components/Navbar2'; // ta navbar spéciale centre
import Stocks from './pages/Stocks';
import Dons from './pages/Dons';
import Distribution from './pages/Distribution';
import Demandes from './pages/Demandes';
import RendezVous from './pages/RendezVous';
import Parametres from './pages/Parametres';
import Avis from './pages/Avis';
import Aide from './pages/Aide';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route par défaut */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Route protégée pour Admin */}
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Dashboard pour donneur */}
        <Route path="/donor-dashboard" element={<DonorDashboard />} />

        {/* Routes pour Centre de Don sans CenterLayout */}
        <Route
          path="/center-dashboard"
          element={
            <>
              <CenterNavbar />
              <div className="main-content">
                <h1>Bienvenue sur le tableau de bord du Centre</h1>
              </div>
            </>
          }
        />
        <Route
          path="/center-dashboard/stocks"
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
          path="/center-dashboard/dons"
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
          path="/center-dashboard/distribution"
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
          path="/center-dashboard/demandes"
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
          path="/center-dashboard/rendezvous"
          element={
            <>
              <CenterNavbar />
              <div className="main-content">
                <RendezVous />
              </div>
            </>
          }
        />

        {/* Routes générales */}
        <Route path="/parametres" element={<Parametres />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/aide" element={<Aide />} />
      </Routes>
    </Router>
  );
}

export default App;
