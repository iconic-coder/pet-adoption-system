import { useState } from 'react';
import { submitSurrender } from '../../utils/api';

const GiveUpForm = () => {
  const [form, setForm] = useState({
    petName: '',
    ownerName: '',
    email: '',
    phone: '',
    reason: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitSurrender(form)
      .then(() => {
        alert('Thank you for your submission. We will contact you soon.');
        setForm({ petName: '', ownerName: '', email: '', phone: '', reason: '' });
      })
      .catch(() => alert('Failed to submit. Please try again.'));
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '2rem 0' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label>Pet Name:</label>
        <input name="petName" type="text" value={form.petName} onChange={handleChange} required 
               style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Your Name:</label>
        <input name="ownerName" type="text" value={form.ownerName} onChange={handleChange} required 
               style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Email:</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required 
               style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Phone:</label>
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} required 
               style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Reason:</label>
        <textarea name="reason" value={form.reason} onChange={handleChange} required 
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', height: '100px' }} />
      </div>
      <button type="submit" style={{ backgroundColor: '#333', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '4px' }}>
        Submit for Review
      </button>
    </form>
  );
};

export default GiveUpForm;