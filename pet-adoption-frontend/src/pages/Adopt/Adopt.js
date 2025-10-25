import AdoptionForm from '../../components/AdoptionForm/AdoptionForm';
import PetCard from '../../components/PetCard/PetCard';

const Adopt = ({ pets, addApplication }) => {
  return (
    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      <div>
        <h2>Available Pets</h2>
        {pets.map(pet => (
          <PetCard key={pet.id} pet={pet} showAdoptButton={true} />
        ))}
      </div>
      <div>
        <AdoptionForm addApplication={addApplication} pets={pets} />
      </div>
    </div>
  );
};

export default Adopt;