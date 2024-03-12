import React from 'react';

const BookingSlot = ({ time, isBooked }) => {
  return (
    <div style={{ padding: '10px', margin: '5px', backgroundColor: isBooked ? '#f88' : '#8f8' }}>
      {time} {isBooked ? 'Unavailable' : 'Available'}
    </div>
  );
};

export default BookingSlot;