import { createSlice } from '@reduxjs/toolkit';

const initialStateValue ={
  active: true
}
export const submitSlice = createSlice({
    name: 'submit',
    initialState: initialStateValue,
    reducers: {
      toggleOn: (state = initialStateValue) => {
        state.active = true
      },
      toggleOff: (state = initialStateValue) => {
        state.active = false
      }
    }
  })

  export const {toggleOn, toggleOff} = submitSlice.actions;
  
  export default submitSlice.reducer;



