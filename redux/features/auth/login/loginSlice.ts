import { createSlice } from '@reduxjs/toolkit';

export enum LoginStep {
  NationalCode = 0,
  Phone = 1,
  Otp = 2,
}

interface LoginState {
  step: LoginStep;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  step: LoginStep.NationalCode,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    nextStep(state) {
      state.step += 1;
    },
    prevStep(state) {
      state.step -= 1;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { nextStep, prevStep, setLoading, setError } =
  loginSlice.actions;

export default loginSlice.reducer;