import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: "priceInsights",
};

const tokenCommonSlice = createSlice({
  name: "tokenCommon",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export default tokenCommonSlice.reducer;
export const { setActiveTab } = tokenCommonSlice.actions;
