import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function HomePage() {
  const formData = useSelector((state) => state.formData);
  const [name, setName] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [interest, setInterest] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubscribeChange = (e) => {
    setSubscribe(e.target.checked);
  };

  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    // Display the data as needed
    console.log('Name:', name);
    console.log('Subscribe:', subscribe);
    console.log('Interest:', interest);
  };

  return (
    <div>
      
      <h1>Welcome to test App</h1>
      <p>Name: {formData.name}</p>
      <p>Subscribed: {formData.subscribe ? 'Yes' : 'No'}</p>
      <p>Interest: {formData.interest}</p>
    </div>
    
      );
}

export default HomePage;
