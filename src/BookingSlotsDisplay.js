import React from 'react';
import BookingSlot from './BookingSlot';

// 假设这是所有可能的时间槽
const allTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const BookingSlotsDisplay = ({ availableTimes }) => {
  // 确保在使用 availableTimes 前它不是 undefined
  if (!availableTimes) {
    console.error('availableTimes is undefined');
    return null; // 或者根据你的需要显示一个加载中的状态或错误信息
  }

  return (
    <div>
      {allTimes.map(time => (
        <BookingSlot 
          key={time} 
          time={time} 
          isBooked={!availableTimes.includes(time)}
        />
      ))}
    </div>
  );
};

export default BookingSlotsDisplay;