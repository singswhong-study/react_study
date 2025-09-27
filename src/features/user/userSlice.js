import { createSlice } from "@reduxjs/toolkit";

// 초기 유저 상태
const initialState = {
  id: 1,
  name: '홍성욱',
  email: 'hong@test.com',
  loggedIn: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.name = '';
      state.email = '';
    },
    updateProfile: (state, action) => {
      if (action.payload.name) state.name = action.payload.name;
      if (action.payload.email) state.email = action.payload.email;
    },
  }
});

export const { login, logout, updateProfile } = userSlice.actions;
export const selectUserProfile = (state) => ({  //state를 조회하기 위한 selector
  name: state.user.name,
  email: state.user.email
});
export default userSlice.reducer;