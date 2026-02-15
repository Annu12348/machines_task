import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import AdminUserReducer from "./reducer/AdminUserSlice";
import  EmployeesReducers from "./reducer/EmployeeSlice";
import TasksReducers from "./reducer/TaskSlice";

const persistConfig = {
  key: "machine_Work_test",
  version: 1,
  storage,
  whitelist: ["AdminUser", "Employeess", "Taskss"], 
};

const rootReducer = combineReducers({
  AdminUser: AdminUserReducer,
  Employeess: EmployeesReducers,
  Taskss: TasksReducers 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
