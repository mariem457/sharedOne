import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { FiSettings, FiMessageCircle, FiHelpCircle, FiLogOut } from "react-icons/fi";
import "./DonorDashboard.css";
import {Link} from 'react-router-dom'
const donationData = [
  { year: "2019", donations: 1 },
  { year: "2020", donations: 2 },
  { year: "2021", donations: 2 },
  { year: "2022", donations: 3 },
  { year: "2023", donations: 4 },
];

const donationHistory = [
  { date: "2023-01-15", location: "Djerba", units: 1 },
  { date: "2022-07-10", location: "Tunis", units: 1 },
  { date: "2021-03-22", location: "Sfax", units: 1 },
];

const DonorDashboard = () => {
  
  const navigate = useNavigate();

  const handleRendezVousClick = () => {
    navigate("/rendez-vous");
  };
 
  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar fixed">
        <h2 className="logo">🩸 Hémovigilance</h2>
        <p className="sub-info">Centre Transfusion Sanguine<br />Tunisie, TN</p>
        <ul className="sidebar-menu no-bullets">
    <li className="hover-item">
  <button >
    <Link className="but" to="/parametres"><FiSettings />Paramètres</Link><br/><br/>
  </button></li> 
  <li className="hover-item">
  <button >
    <Link className="but" to="/avis" ><FiMessageCircle/> Avis</Link><br/><br/>
  </button>
  </li>
  <li className="hover-item">
  <button className="but">
    <Link className="but" to="/aide" ><FiHelpCircle/> Aide</Link>
  </button></li>
</ul>
        <div className="bottom-menu">
          <div className="donor-profile">
            <div className="donor-logo">D</div>
            <div className="donor-text">Donneur</div>
          </div>
          <button className="logout-btn1"><FiLogOut />Déconnexion</button>
        </div>
      </aside>

      <div className="main-content">
        <header className="topbar fixed">
          <h1>Espace Donneur</h1>
          <button className="rendezvous-btn" onClick={handleRendezVousClick}>
            📅 Rendez-vous
          </button>
        </header>

        <div className="content-sections white-background">
        <section className="profile-section card">
  <h2>Profil Donneur</h2>
  <table className="donor-profile-table">
    <tbody>
      <tr>
        <td>📧 Mail</td>
        <td>takwabhss@gmail.com</td>
      </tr>
      <tr>
        <td>🩸 Groupe sanguin</td>
        <td>O+</td>
      </tr>
      <tr>
        <td>💉 Dons</td>
        <td>4</td>
      </tr>
      <tr>
        <td>📞 Téléphone</td>
        <td>00000000</td>
      </tr>
      <tr>
        <td>📍 Ville</td>
        <td>Djerba</td>
      </tr>
    </tbody>
  </table>
</section>

          <section className="stats-section card">
            <h2>Statistiques des Dons</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={donationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="donations" stroke="#ff4d4d" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </section>

          <section className="history-section card">
            <h2>Historique des Dons</h2>
            <table className="donation-history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Lieu</th>
                  <th>Unités</th>
                </tr>
              </thead>
              <tbody>
                {donationHistory.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.location}</td>
                    <td>{item.units}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;