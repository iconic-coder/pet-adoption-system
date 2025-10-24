import { useState } from "react";

const AdoptionForm = ({ addApplication }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!form.name || !form.email || !form.phone) {
            setError("Please fill in all fields");
            return;
        }

        const configObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        };

        fetch('http://localhost:3002/applications', configObj)
            .then(res => res.json())
            .then(data => {
                addApplication(data); // THIS STATE UPDATE IS REQUIRED!!!
                alert('Application submitted successfully!');
                setForm({ name: '', email: '', phone: '' });
                setError('');
            })
            .catch(err => setError('Failed to submit application'));
    };
    return (
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '8px' }}>
            <h2>Adoption Form</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div style={{ marginBottom: '1rem' }}>
                <label>Full Name:</label>
                <input name="name" type="text" value={form.name} onChange={handleChange} required
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
            <button type="submit" style={{ backgroundColor: '#333', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '4px' }}>
                Submit Application
            </button>
        </form>
    );
};

export default AdoptionForm;