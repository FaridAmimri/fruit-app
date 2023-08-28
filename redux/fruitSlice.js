/** @format */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fruit: null
}

export const fruitSlice = createSlice({
  name: 'fruit',
  initialState,
  reducers: {
    setFruit: (state, action) => {
      state.fruit = action.payload
    }
  }
})

export const { setFruit } = fruitSlice.actions

export const selectFruit = (state) => state.fruit.fruit

export default fruitSlice.reducer
