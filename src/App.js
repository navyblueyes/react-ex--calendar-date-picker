import React, { useState } from 'react';
import './App.css';

const calendarDates = Array(31)
  .fill(0)
  .map((e, i) => i);

export default function App() {
  const [choosingType, setChoosingType] = useState('start');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function updateDate(chosenDay) {
    if (choosingType === 'start'){
      setStartDate(chosenDay);
      setChoosingType('end');
    }
    if (choosingType === 'end'){
      setEndDate(chosenDay);
    }
  }

  return (
    <>
      <div className="date-chooser">
        <button className="date-chooser-button">
          Start Date <span>{startDate}</span>
        </button>
        <button className="date-chooser-button">
          End Date <span>{endDate}</span>
        </button>
      </div>

      <div className="calendar">
        {calendarDates.map((day, index) => {
          const dayNumber = day + 1;
          return (
            <button 
              key={index}
              className="calendar-day" 
              onClick={() => updateDate(dayNumber)}
            >
              {dayNumber}
            </button>
          );
        })}
      </div>
    </>
  );
}
