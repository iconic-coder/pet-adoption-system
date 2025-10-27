import { useParams, useNavigate } from 'react-router-dom';

const PetDetails = ({ pets }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = pets.find(p => p.id === parseInt(id));

  if (!pet) return <div>Pet not found</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1rem', padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
        ← Back
      </button>
      <img src={pet.image} alt={pet.name} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
      <h1>{pet.name}</h1>
      <p><strong>Breed:</strong> {pet.breed}</p>
      <p><strong>Age:</strong> {pet.age}</p>
      <p><strong>Status:</strong> {pet.available ? 'Available' : 'Adopted'}</p>
      {pet.available && (
        <button 
          onClick={() => navigate('/adopt')}
          style={{ backgroundColor: '#333', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '4px', marginTop: '1rem' }}
        >
          Adopt {pet.name}
        </button>
      )}
    </div>
  );
};

export default PetDetails;