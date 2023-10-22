/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { fetchDelete, fetchAdd } from "../Redux/Reducer/habitReducer";
import { useDispatch } from "react-redux";
import "./habits.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import CalendarView from "./calendarView";

const ListHabit = ({ habits }) => {
  const dispatch = useDispatch();
  const [hanldeView, SetHandleView] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);



  const handleDelete = (id) => {
    dispatch(fetchDelete(id));
  };

  const hanldeViewClicked = (id) => {
    const data = habits.filter((hab) => hab.id === id);
    SetHandleView(true);
  };  

  return (
    <div className="habit-card-container">
      {habits.map((hab) => (
        <div className="habit-card" key={hab.id}>
          <div className="habit-details">
            <p>Name: {hab.name}</p>
            <p>Category: {hab.category}</p>
            <p>Completed Days: {selectedDates.length}</p>
          </div>
          <div className="calendar-icon">
            <FontAwesomeIcon icon={faCalendar} onClick={() => hanldeViewClicked(hab.id)} />
          </div>
          <button className="delete-button" onClick={() => handleDelete(hab.id)}>
            Delete
          </button>
        </div>
      ))}
      {hanldeView && (
        <div className="overlay">
          <CalendarView selectedDates ={selectedDates} setSelectedDates={setSelectedDates} SetHandleView={SetHandleView} />
        </div>
      )}
    </div>
  );
};

export default ListHabit;
