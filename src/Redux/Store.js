import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import loginReducer from "./Slice/loginSlice";

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [],
    },
  }),
});

export default store;
