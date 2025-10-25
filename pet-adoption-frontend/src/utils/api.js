const API_BASE = 'http://localhost:3002';

export const fetchPets = () => fetch(`${API_BASE}/pets`).then(res => res.json());

export const submitApplication = (application) => 
  fetch(`${API_BASE}/applications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(application)
  }).then(res => res.json());

export const submitSurrender = (surrender) =>
  fetch(`${API_BASE}/surrenders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(surrender)
  }).then(res => res.json());