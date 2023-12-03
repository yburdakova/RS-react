import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../constants/types";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [
  ],
  isLoading: false,
  error:''
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload
    },
  },
})

export default userSlice.reducer