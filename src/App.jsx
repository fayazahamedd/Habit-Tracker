/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchStart, habitSelector } from './Redux/Reducer/habitReducer';
import { useEffect } from 'react';
import AddHabit from './Components/addHabits';
import ListHabit from './Components/listHabits';

const App = () => {
  const dispatch = useDispatch();
  const [createnewClicked, setCreatenewClicked] = useState(false);
  const { habits } = useSelector(habitSelector);

  console.log('habits', habits);

  useEffect(() => {
    dispatch(fetchStart());
  }, []);

  return (
    <>
      <h1>Habit Tracker</h1>
      <div className="card">
        <button onClick={() => setCreatenewClicked(true)}>Add Habit</button>
        {habits.length === 0 ? (
          <h5>No Habits to display</h5>
        ) : (
          <ListHabit habits={habits} />
        )}
        {createnewClicked && (
          <div className='overlay'>
            <div className='card'>
              <h2>Add Habit</h2>
              <AddHabit setCreatenewClicked={setCreatenewClicked} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
