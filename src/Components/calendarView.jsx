/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// CalendarView.jsx

import React, { useState } from 'react';
import './CalendarView.css'; // Import CSS file

const CalendarView = ({ selectedDates, setSelectedDates, SetHandleView }) => {
  const startDate = new Date("2023-10-21T18:30:00.000Z");
  const endDate = new Date("2023-10-28T18:30:00.000Z");
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Define weekdays here


  const isSameDate = (date1, date2) =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();

  const handleDateClick = (date) => {
    if (!selectedDates.some(selectedDate => isSameDate(selectedDate, date))) {
      // Add the date to the selectedDates array if it's not already present
      setSelectedDates([...selectedDates, date]);
    } else {
      // Remove the date from the selectedDates array if it's already present
      setSelectedDates(selectedDates.filter(selectedDate => !isSameDate(selectedDate, date)));
    }
  };

  const datesArray = [];
  for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
    const isDisabled = currentDate < startDate || currentDate > endDate;
    datesArray.push({ date: new Date(currentDate), isDisabled });
  }

  return (
    <div className="calendar-container">
      <table className="calendar-table">
        <thead>
          <tr>
            {weekdays.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datesArray.map(({ date, isDisabled }, index) => {
            const dayOfWeek = weekdays[date.getDay()];
            return (
              <tr key={index}>
                {weekdays.map((weekday, idx) => {
                  const isCurrentWeekday = weekday.toLowerCase() === dayOfWeek.toLowerCase();
                  const isSelected = selectedDates.some(selectedDate => isSameDate(selectedDate, date));
                  return (
                    <td key={idx} className={weekday.toLowerCase()}>
                      {isCurrentWeekday && !isDisabled ? (
                        <div
                          className={`calendar-date ${isDisabled ? 'disabled' : ''} ${isSelected ? 'selected' : 'unselected'} ${
                            isSameDate(date, new Date()) ? 'today' : ''
                          }`}
                          onClick={() => {
                            if (!isDisabled) {
                              handleDateClick(date);
                            }
                          }}
                        >
                          <div className="date">{date.getDate()}</div>
                          <div className="month">{date.toLocaleString('default', { month: 'short' })}</div>
                        </div>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
      <hr></hr>
      <br></br>
      <button type='submit' onClick={() => SetHandleView(false)}>Add</button>
      <div className="selected-dates">
        <h2>Selected Dates:</h2>
        <ul>
          {selectedDates.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
        </ul>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default CalendarView;
