import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { User, UserState } from "../../types/User";

// https://teamfinder.onrender.com/users

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const res = await fetch('https://teamfinder.onrender.com/users')
        const data = await res.json()
        return data as User[]
    } catch (err) {
        throw err
    }
})

export const registerUser = createAsyncThunk('users/registerUser', async (userData: User) => {
    try {
        const res = await fetch('https://teamfinder.onrender.com/users/adduser', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })

        if (res.ok) {
            const data = await res.json()
            console.log('user added')
            return data as User
        } else {
            throw new Error('Using sign up failed')
        }
    } catch (err) {
        throw err
    }
})

export const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = null;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message || 'An error occurred.';
          })
          .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
            state.error = null;
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'User registration failed.';
          })
    }
})

export default userSlice.reducer