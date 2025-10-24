import PetCard from '../../components/PetCard/PetCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState } from 'react';

const Home = ({ pets }) => {
  const [filter, setFilter] = useState('');
  
  const filteredPets = pets.filter(pet => 
    pet.name.toLowerCase().includes(filter.toLowerCase()) ||
    pet.breed.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Find Your New Best Friend</h1>
      <SearchBar filter={filter} onFilterChange={setFilter} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {filteredPets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Home;