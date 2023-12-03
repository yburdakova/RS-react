import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISubmitForm } from "../../constants/types";

interface UserState {
  users: ISubmitForm[];
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
    setUser(state, action: PayloadAction<ISubmitForm[]>) {
      state.users = action.payload
    },
  },
})

export default userSlice.reducer