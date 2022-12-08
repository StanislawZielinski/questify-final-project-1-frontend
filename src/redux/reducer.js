import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { fetchCards, addCard, deleteCard, editCard } from "../services/api";

const cards = createReducer([], {
  [fetchCards.fulfilled]: (_, { payload }) => {
    return payload;
  },
  [addCard.fulfilled]: (state, { payload }) => [payload, ...state],
  // check if edit works properly or if needs any modifications:
  [editCard.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
  [deleteCard.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});
const loading = createReducer(false, {
  [fetchCards.pending]: () => true,
  [fetchCards.fulfilled]: () => false,
  [fetchCards.rejected]: () => false,

  [addCard.pending]: () => true,
  [addCard.fulfilled]: () => false,
  [addCard.rejected]: () => false,

  [editCard.pending]: () => true,
  [editCard.fulfilled]: () => false,
  [editCard.rejected]: () => false,

  [deleteCard.pending]: () => true,
  [deleteCard.fulfilled]: () => false,
  [deleteCard.rejected]: () => false,
});
const error = createReducer(null, {
  [fetchCards.rejected]: (_, { payload }) => payload,
  [fetchCards.pending]: () => null,
  [addCard.rejected]: (_, { payload }) => payload,
  [editCard.rejected]: (_, { payload }) => payload,
  [deleteCard.rejected]: (_, { payload }) => payload,
});
export const reducer = combineReducers({
  cards,
  loading,
  error,
});
