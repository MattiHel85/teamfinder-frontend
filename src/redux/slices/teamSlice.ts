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


const addTeamAsync = createAsyncThunk('teams/addTeam', async (newTeam: Team) => {
    try {
        const res = await fetch('https://teamfinder.onrender.com/teams/addteam', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(newTeam)
        })

        const data = await res.json()
        console.log(data)
        return data as Team
    } catch (err) {
        throw err
    }
})

export const teamSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTeamsAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTeamsAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.teams = action.payload;
        });
        builder.addCase(fetchTeamsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || null;
        });
        builder.addCase(addTeamAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addTeamAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.teams = [...state.teams, action.payload];
        });
        builder.addCase(addTeamAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occurred';
            console.log(action.error.message)
        });
    }
});

export { fetchTeamsAsync, addTeamAsync };

export default teamSlice.reducer;