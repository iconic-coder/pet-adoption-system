const API_BASE_URL = 'http://localhost:3001';

export const fetchPets = async () => {
  const response = await fetch(`${API_BASE_URL}/pets`);
  return response.json();
};

export const fetchPetById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/pets/${id}`);
  return response.json();
};

export const fetchShelterInfo = async () => {
  const response = await fetch(`${API_BASE_URL}/shelterInfo`);
  return response.json();
};

export const submitAdoption = async (adoptionData) => {
  const response = await fetch(`${API_BASE_URL}/adoptions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(adoptionData)
  });
  return response.json();
};