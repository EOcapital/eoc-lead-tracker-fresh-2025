import React, { useState } from 'react';

function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Lead submitted: ' + JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <textarea name="notes" placeholder="Notes" onChange={handleChange} />
      <button type="submit">Submit Lead</button>
    </form>
  );
}

export default LeadForm;
