import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from './redux/actions';
import { useNavigate } from 'react-router-dom';


function SubscribePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    const formData = {
      name,
      subscribe,
      interest,
    };
    dispatch(setFormData(formData));
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="subscribe"
            checked={subscribe}
            onChange={handleSubscribeChange}
          />
          <label htmlFor="subscribe">Subscribe</label>
        </div>
        <div>
          <p>Select your interests:</p>
          <label>
            <input
              type="radio"
              name="interest"
              value="cricket"
              checked={interest === 'cricket'}
              onChange={handleInterestChange}
            />
            Cricket
          </label>
          <label>
            <input
              type="radio"
              name="interest"
              value="basketball"
              checked={interest === 'basketball'}
              onChange={handleInterestChange}
            />
            Basketball
          </label>
          <label>
            <input
              type="radio"
              name="interest"
              value="football"
              checked={interest === 'football'}
              onChange={handleInterestChange}
            />
            Football
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </div>
      </form>
      <div>
        <h2>Summary</h2>
        <p>Name: {name}</p>
        <p>Subscribed: {subscribe ? 'Yes' : 'No'}</p>
        <p>Interest: {interest}</p>
      </div>
    </div>
  );
}

export default SubscribePage;
