import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonationAppointment.css';

const DonationAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bloodType: '',
    location: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Appointment data:', formData);
    navigate('/confirmation');
  };

  return (
    <div className="appointment-container">
      <h1>Prendre un Rendez-vous de Don</h1>
      <p className="subtitle">Remplissez ce formulaire pour planifier votre don de sang</p>
      
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label>Nom Complet</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Téléphone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Groupe Sanguin</label>
          <select
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div className="form-group">
          <label>Centre de Don</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez</option>
            <option value="Centre National, Tunis">Centre National, Tunis</option>
            <option value="CHU Sahloul, Sousse">CHU Sahloul, Sousse</option>
            <option value="Hôpital Régional, Sfax">Hôpital Régional, Sfax</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Heure</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Confirmer le Rendez-vous
        </button>
      </form>
    </div>
  );
};

export default DonationAppointment;