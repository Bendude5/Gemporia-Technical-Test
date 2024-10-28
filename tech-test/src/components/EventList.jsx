import React from 'react';

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Events</h2>
      {events.length === 0 ? (
        <p>No events for this date.</p>
      ) : (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.name} - {event.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;