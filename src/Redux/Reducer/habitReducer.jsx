/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const INTIAL_STATE = {
  habits: [],
  isLoading: false,
  error: null,
};

const dateCreate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate; 
}

const habitSlice = createSlice({
  name: "habits",
  initialState: INTIAL_STATE,
  reducers: {
    fetchStart: (state, action) => {
      state.isLoading = true;
    },
    fetchAdd: (state, action) => {
        console.log(action.payload)
      state.habits = [
        ...state.habits,
        {
          id: state.habits.length +1,
          name: action.payload.name,
          category: action.payload.category,
          createdAt: dateCreate(),
          comp: 0,
        },
      ];
    },
    fetchError: (state, action) => {
      state.error = "Failed to fetch";
    },
    fetchDelete: (state, action) => {
        const idToDelete = action.payload;
        state.habits = state.habits.filter((hab) => hab.id !== idToDelete);
    },
    fetchEdit: (state, action) => {
      // state.habits = state.habits.filter((hab) => hab.id !== idToDelete);
  },
  },
});

export const habitReducer = habitSlice.reducer;
export const { fetchAdd, fetchDelete, fetchError, fetchStart } =
  habitSlice.actions;
export const habitSelector = (state) => state.habitReducer;