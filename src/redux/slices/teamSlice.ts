import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TeamState, Team } from '../../types/Team';

export const initialState: TeamState = {
    teams: [],
    loading: false,
    error: null
}

const fetchTeamsAsync = createAsyncThunk('teams/fetchTeams', async () => {
    try {
        const res = await fetch('https://teamfinder.onrender.com/teams');
        const data = await res.json();
        return data as Team[];
    } catch (err) {
        throw err;
    }
});

export const teamSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTeamsAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchTeamsAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.teams = action.payload;
        });
        builder.addCase(fetchTeamsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || null;
        });
    }
});

export { fetchTeamsAsync };

export default teamSlice.reducer;