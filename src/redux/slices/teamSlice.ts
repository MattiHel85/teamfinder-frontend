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

const fetchTeamById = createAsyncThunk('teams/fetchTeamById', async (teamId: string | undefined) => {
    try {
        const res = await fetch(`https://teamfinder.onrender.com/teams/${teamId}`)
        const data = await res.json()
        return data as Team[]
    } catch (err) {
        throw err
    }
})


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

const updateTeamById = createAsyncThunk('teams/updateTeam', async (updatedTeam: Team) => {
    try {
        const res = await fetch(`https://teamfinder.onrender.com/teams/update/${updatedTeam._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(updatedTeam)
        })
        const data = await res.json()
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
        });
        builder.addCase(updateTeamById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateTeamById.fulfilled, (state, action) => {
            state.loading = false;
            state.teams = [...state.teams, action.payload];
        });
        builder.addCase(updateTeamById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occured';
        });
        builder.addCase(fetchTeamById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTeamById.fulfilled, (state, action) => {
            state.loading = false;
            state.teams = action.payload;
        });
        builder.addCase(fetchTeamById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occured';
        });
    }
});

export { fetchTeamsAsync, addTeamAsync, updateTeamById, fetchTeamById };

export default teamSlice.reducer;