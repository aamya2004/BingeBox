import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    clearUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
