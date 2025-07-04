import React, { useState } from 'react';

function LeadForm() {
  const [formData, setFormData] = useState({
    propertyAddress: '',
    ownerName: '',
    phoneNumber: '',
    source: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead submitted:', formData);
    alert('Lead submitted successfully!');
    setFormData({ propertyAddress: '', ownerName: '', phoneNumber: '', source: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
      <input type="text" name="propertyAddress" value={formData.propertyAddress} onChange={handleChange} placeholder="Property Address" required />
      <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} placeholder="Owner Name" required />
      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <input type="text" name="source" value={formData.source} onChange={handleChange} placeholder="Lead Source" />
      <button type="submit">Submit Lead</button>
    </form>
  );
}

export default LeadForm;
