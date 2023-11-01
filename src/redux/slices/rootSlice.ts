import { combineReducers } from "redux";
import teamSlice from "./teamSlice";
import authSlice from "./authSlice";

export const rootReducer = combineReducers({
    teams: teamSlice,
    auth: authSlice
})

export type RootState = ReturnType<typeof rootReducer>