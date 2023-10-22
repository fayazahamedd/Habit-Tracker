/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./habits.css";
import { fetchAdd, fetchDelete, fetchError, fetchStart, habitSelector }  from "../Redux/Reducer/habitReducer"
import { useDispatch } from "react-redux";


const AddHabit = ({ setCreatenewClicked }) => {
  const dispatch =  useDispatch();

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload= {
        name:event.target[0].value,
        category: selectedOption
    }
    dispatch(fetchAdd(payload))
    setCreatenewClicked(false);

  }


  return (
    <div className="edit-form">
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Habit.." />
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Select an option</option>
          <option value="Health">Health</option>
          <option value="Sports">Sports</option>
          <option value="Food">Food</option>
        </select>
        <hr></hr>
        <div className="action-buttons">
            <button className="delete-button" >
            Add
            </button> {"   "}
            <button className="delete-button" onClick={()=> setCreatenewClicked(false)}>
            Close
            </button>
            </div>
      </form>
    </div>
  );
};

export default AddHabit;
