// src/redux/storiesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import storiesData from "../storiesData.json";

const storiesSlice = createSlice({
  name: "stories",
  initialState: storiesData,
  reducers: {
    likeStory: (state, action) => {
      const story = state.find((story) => story.id === action.payload);
      if (story) {
        story.likes += 1;
      }
    },
  },
});

export const { likeStory } = storiesSlice.actions;

export default storiesSlice.reducer;
