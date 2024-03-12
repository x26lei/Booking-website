import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import BookingSlotsDisplay from './BookingSlotsDisplay'; // 假设你有这个组件

const initializeTimes = () => {
  // 这里初始化所有可预订的时间
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    (state, action) => {
      console.log("hi")
      switch (action.type) {
        case 'BOOK_TIME':
          // 假设你想要在预订时间后从列表中移除该时间
          return state.filter(time => time !== action.payload);
        default:
          return state;
      }
    },
    initializeTimes() // 直接初始化状态
  );

  // 表单提交处理函数
  const handleFormSubmit = (bookingDetails) => {
    // 这里使用 BOOK_TIME action 更新状态
    console.log('Dispatching BOOK_TIME with payload:', bookingDetails.time);
    dispatch({ type: 'BOOK_TIME', payload: bookingDetails.time });
  };

  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <BookingSlotsDisplay availableTimes={availableTimes} />
    </div>
  );
};

export default Main;
