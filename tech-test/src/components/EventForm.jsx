import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName) return;
    onAddEvent({ name: eventName });
    setEventName('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <input
        type="text"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        placeholder="Add Event Here Please"
        required
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;