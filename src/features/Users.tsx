import { createSlice } from "@reduxjs/toolkit";
import {UserData} from './UserData'

export const userSlice = createSlice({
    name:'user',
    initialState :  {value: UserData},
    reducers:{
        deleteUser:(state, action)=>{
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
    }
})


export const {deleteUser} = userSlice.actions
export default userSlice.reducer;