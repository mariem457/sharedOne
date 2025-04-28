import React from 'react';
import Navbar from '../components/Navbar';
import './Dashboard.css';
import BloodCard from '../components/BloodCard';
import AlertCenter from '../components/AlertCenter';

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <main>
        <BloodCard />
        <AlertCenter />
      </main>
    </div>
  );
}

export default Dashboard;
