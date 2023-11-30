import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStote = ReturnType<typeof setupStore>;
export type AppDispatch = AppStote['dispatch'];
