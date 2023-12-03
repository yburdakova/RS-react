import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../constants/types";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [
    {
      id: 1,
      name: "Ivan",
      email: 'ivan@gmail.com',
      age: 23,
      password: "kwjhcwehdw",
      confirmPassword: "ksdcwkeg",
      gender: "male",
      country: "Belarus",
      accept: true,
      picture: "/src/assets/user-avatar.png"
    },
    
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