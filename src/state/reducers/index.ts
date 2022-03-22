import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducer";
import { eventReducer } from "./eventReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  event: eventReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
