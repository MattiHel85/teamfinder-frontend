import { combineReducers } from "redux";
import teamSlice from "./teamSlice";

export const rootReducer = combineReducers({
    teams: teamSlice
})

export type RootState = ReturnType<typeof rootReducer>