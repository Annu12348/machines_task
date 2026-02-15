import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    error: null,
    loading: false,
};

export const TasksSlice = createSlice({
    name: "Tasks",
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = Array.isArray(action.payload) ? action.payload : [];
            state.loading = false;
            state.error = null;
        },

        addTasks: (state, action) => {
            if (!action.payload || !action.payload._id) return;
            state.tasks.push(action.payload);
        },

        removeTasks: (state, action) => {
            if (!action.payload) return;

            state.tasks = state.tasks.filter((img) => img._id !== action.payload)
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { setTasks, addTasks, removeTasks, setLoading, setError, clearError } =
    TasksSlice.actions;

export default TasksSlice.reducer;
