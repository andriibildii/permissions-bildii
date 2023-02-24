import {createSlice} from '@reduxjs/toolkit';
import {data} from '../data'

const initialState = {
    permissions: data
}

const permissionsSlice = createSlice({
    name: 'permissions',
    initialState,
    reducers: {
        removePermission(state, action) {
            state.permissions = state.permissions.filter(permission => permission.id !== action.payload.id)
        },
        updatePermission(state, action) {
            state.permissions = action.payload
        }
    }
})

export const {updatePermission, removePermission} = permissionsSlice.actions;

export default permissionsSlice.reducer;