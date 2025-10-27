import React from 'react';
import './PetCard.css';

const PetCard = ({ pet, onClick }) => {
  return (
    <div className="pet-card" onClick={() => onClick(pet.id)}>
      <img src={pet.image} alt={pet.name} />
      <div className="pet-info">
        <h3>{pet.name}</h3>
        <p>{pet.breed} • {pet.age} years old</p>
        <p className="energy-level">Energy: {pet.energyLevel}</p>
        <p className="adoption-fee">KES {pet.adoptionFee?.toLocaleString()}</p>
        <div className="pet-tags">
          {pet.goodWith?.slice(0, 2).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetCard;