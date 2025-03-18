import React from 'react';
import freelance from '../assets/freelance-2.jpg';

const WelcomePage = () => {
  return (
    <div className="content">
      <img src={freelance} alt="Workzone logo" className="logo" />
      <h1 className="title">Workzone</h1>
      <h1 className="subtitle">Bienvenue sur Workzone</h1>
      <h3 className="text">"Coder aujourd'hui, innover demain, façonner l'avenir, ensemble sur notre chemin."</h3>
      <button className='btn'>Commencer</button>
    </div>
  );
};

export default WelcomePage;
