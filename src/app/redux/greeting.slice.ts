import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/random_greeting');
    const data = await response.json();
    return data.greeting;
  }
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: '',
  },
  reducers: {
    setGreeting: (state, action) => {
      state.greeting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.greeting = payload;
    });
  },
});


export const store = configureStore({
  reducer: {
    greetings: greetingsSlice.reducer,
  },
});