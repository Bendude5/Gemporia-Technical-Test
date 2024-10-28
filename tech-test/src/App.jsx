import React, { useState } from 'react';
import { format } from 'date-fns';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
  };

  const addEvent = (event) => {
    setEvents((prevEvents) => [
      ...prevEvents,
      { ...event, date: format(selectedDate, 'yyyy-MM-dd') },
    ]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Bens Tech Test Event Calendar</h1>
      <input
        type="date"
        onChange={handleDateChange}
        value={format(selectedDate, 'yyyy-MM-dd')}
      />
      <h2>Selected Date: {format(selectedDate, 'MMMM dd, yyyy')}</h2>
      <EventForm onAddEvent={addEvent} />
      <EventList events={events} />
    </div>
  );
};
export default App;