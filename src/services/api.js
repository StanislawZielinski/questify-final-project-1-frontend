import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// axios.defaults.baseURL = 'our api from back';
export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  try {
    const { data } = await axios.get("/cards");
    return data;
  } catch (error) {
    console.error(error.message);
  }
});
export const addCard = createAsyncThunk(
  "cards/addCard",
  async ({ name, category, level, date }) => {
    try {
      const { data } = await axios.post("/cards", {
        name,
        category,
        level,
        date,
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
      const { data } = await axios.delete(`cards/${cardId}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);
export const editCard = createAsyncThunk("cards/editCard", async (cardId) => {
  try {
    const { data } = await axios.patch(`cards/${cardId}`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
});
