import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BecomeDonor.css';

const BecomeDonor = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    bloodType: '',
    governorate: '',
    lastDonation: '',
    healthConditions: ''
  });

  const governorates = [
    "Tunis", "Ariana", "Ben Arous", "Manouba", 
    "Nabeul", "Zaghouan", "Bizerte", "Béja",
    "Jendouba", "Le Kef", "Siliana", "Kairouan",
    "Kasserine", "Sidi Bouzid", "Sousse", "Monastir",
    "Mahdia", "Sfax", "Gabès", "Médenine",
    "Tataouine", "Gafsa", "Tozeur", "Kebili"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Donor registration:', formData);
    navigate('/thank-you');
  };

  return (
    <div className="donor-registration">
      <div className="progress-bar">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      <h1>Devenez Donneur de Sang</h1>
      <p className="subtitle">Remplissez ce formulaire pour rejoindre notre communauté de donneurs</p>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step">
            <h2>Informations Personnelles</h2>
            <div className="form-group">
              <label>Nom Complet *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Téléphone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Date de Naissance *</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>

            <button type="button" className="next-btn" onClick={nextStep}>
              Suivant
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Informations Médicales</h2>
            <div className="form-group">
              <label>Groupe Sanguin *</label>
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
              <label>Gouvernorat *</label>
              <select
                name="governorate"
                value={formData.governorate}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez</option>
                {governorates.map(gov => (
                  <option key={gov} value={gov}>{gov}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Date du dernier don (si applicable)</label>
              <input
                type="date"
                name="lastDonation"
                value={formData.lastDonation}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Conditions médicales (le cas échéant)</label>
              <textarea
                name="healthConditions"
                value={formData.healthConditions}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <div className="form-navigation">
              <button type="button" className="prev-btn" onClick={prevStep}>
                Retour
              </button>
              <button type="button" className="next-btn" onClick={nextStep}>
                Suivant
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Confirmation</h2>
            <div className="summary">
              <h3>Veuillez vérifier vos informations:</h3>
              <p><strong>Nom:</strong> {formData.fullName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Téléphone:</strong> {formData.phone}</p>
              <p><strong>Groupe Sanguin:</strong> {formData.bloodType}</p>
              <p><strong>Gouvernorat:</strong> {formData.governorate}</p>
            </div>

            <div className="form-group checkbox-group">
              <input type="checkbox" id="consent" required />
              <label htmlFor="consent">
                Je certifie que les informations fournies sont exactes et que je réponds aux critères pour donner du sang.
              </label>
            </div>

            <div className="form-navigation">
              <button type="button" className="prev-btn" onClick={prevStep}>
                Retour
              </button>
              <button type="submit" className="submit-btn">
                Soumettre l'inscription
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BecomeDonor;