import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminUser: null,
}

export const AdminUserSlice = createSlice({
  name: "AdminUser",
  initialState,
  reducers: {
    setAdminUser: (state, action) => {
      state.adminUser = action.payload;
    },
  },
});

export const { setAdminUser } = AdminUserSlice.actions;
export default AdminUserSlice.reducer;
