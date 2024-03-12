import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch }) => {
  // State variables for each form field
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // const handleDateChange = (e) => {
  //   const newDate = e.target.value;
  //   setDate(newDate);
  //   updateTimes(newDate); // Dispatch update based on selected date
  // };
  
//   // State variable for the list of available times


//   // Event handlers to update state variables
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = { date, time, guests, occasion };
    console.log('Form submission:', reservationData);
    dispatch({ type: 'BOOK_TIME', payload: time });
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="">Select Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;