import React, { useState } from 'react';
import './contact.css';


const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Message sent!');
  };


  return (
  <div className="contact">
    <h2>Contact Me</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          value={formData.name} 
          onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required  
          value={formData.email} 
          onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          required 
          value={formData.message} 
          onChange={handleChange}></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
);
};

export default Contact;
