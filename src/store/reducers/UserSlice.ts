import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IControllableForm, UserState } from "../../constants/types";
import { countries } from "../../constants/countries";



const initialState: UserState = {
  users: [],
  countries: countries,
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IControllableForm[]>) {
      state.users = action.payload
    },
    SetCountry(state, action: PayloadAction<string[]>) {
      state.countries = action.payload
    }
  }
})

export default userSlice.reducer