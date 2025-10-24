const PetCard = ({ pet, showAdoptButton = false }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
      <img src={pet.image} alt={pet.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3>{pet.name}</h3>
      <p>{pet.age}, {pet.breed}</p>
      {showAdoptButton && (
        <button style={{ backgroundColor: '#333', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px' }}>
          Adopt Me
        </button>
      )}
    </div>
  );
};

export default PetCard;