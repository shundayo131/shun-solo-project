import { configureStore } from '@reduxjs/toolkit';
import addResourceReducer from './reducers/addResourceReducer';

const store = configureStore({
  reducer: {
    // add reducer (key & value)
    addResource: addResourceReducer,
  },
});

export default store;