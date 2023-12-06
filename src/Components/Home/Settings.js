import React, { useState } from 'react';
import "./Setting.css"

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      username: '',
      phoneNumber: '',
      password: '',
    });
  };

  return (
    <div className='spg'>
      <h2 className='sname'>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className='formn'>
          <label htmlFor="name">Name:</label>
          <input className='imput1'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='forme'>
          <label htmlFor="email">Email:</label>
          <input className='imput2'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='formu'>
          <label htmlFor="username">Username:</label>
          <input className='imput3'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className='formph'>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input className='imput4'
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className='formp'>
          <label htmlFor="password">Password:</label>
          <input className='imput5'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className='formb' type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsPage;
