import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://backend-questify.herokuapp.com/api";
export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  try {
    const { data } = await axios.get("/tasks");
    return data;
  } catch (error) {
    console.error(error.message);
  }
});
export const addCard = createAsyncThunk(
  "cards/addCard",
  async ({ name, group, level, date, progress }) => {
    try {
      const { data } = await axios.post("/tasks", {
        name,
        group,
        level,
        date,
        progress,
        // _id,
      });
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);
export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async (cardId) => {
    try {
      const { data } = await axios.delete(`/tasks/${cardId}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);
export const editCard = createAsyncThunk(
  "/api/cards/editCard",
  async (cardId) => {
    try {
      const { data } = await axios.patch(`/tasks/${cardId}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);
