import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Themes } from "../../Themes/types";

type HabitsState = {
  theme: Themes,
}

const initialState: HabitsState = {
  theme: Themes.DARK,
}

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Themes>) => {
      state.theme = action.payload;
    },
  }
});

export const {
  changeTheme,
  
} = habitsSlice.actions;

export default habitsSlice.reducer;