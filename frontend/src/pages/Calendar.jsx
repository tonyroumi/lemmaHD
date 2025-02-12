import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const generateDaysInMonth = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = date.toDateString() === selectedDate.toDateString();
      days.push(
        <div
          key={day}
          className={`calendar-day ${isSelected ? 'selected' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 9; hour <= 17; hour++) {
      const time = `${hour}:00`;
      timeSlots.push(
        <div
          key={time}
          className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
          onClick={() => setSelectedTime(time)}
        >
          {time}
        </div>
      );
    }
    return timeSlots;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-section">
        <div className="calendar-header">
          <h2>{monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}</h2>
        </div>
        <div className="weekdays">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>
        <div className="calendar-grid">
          {generateDaysInMonth()}
        </div>
      </div>
      
      <div className="time-slots-section">
        <h2>Available Times for {selectedDate.toDateString()}</h2>
        <div className="time-slots-grid">
          {generateTimeSlots()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
