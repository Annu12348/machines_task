import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [],
    error: null,
    loading: false,
};


export const EmployeesSlice = createSlice({
    name: "Employees",
    initialState,
    reducers: {
        setEmployees: (state, action) => {
            state.employees = Array.isArray(action.payload) ? action.payload : [];
            state.loading = false;
            state.error = null;
        },

        addEmployees: (state, action) => {
            if (!action.payload || !action.payload._id) return;
            state.employees.push(action.payload);
        },

        updateEmployees: (state, action) => {
            if (!action.payload || !action.payload._id) return;

            const index = state.employees.findIndex(
                (emp) => emp._id === action.payload._id
            );

            if (index !== -1) {
                state.employees[index] = {
                    ...state.employees[index],
                    ...action.payload,
                };
            }
        },

        removeEmployee: (state, action) => {
            if (!action.payload) return;

            state.employees = state.employees.filter((img) => img._id !== action.payload)
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

export const { setEmployees, addEmployees, updateteEmployees, removeEmployees, setLoading, setError, clearError } =
    EmployeesSlice.actions;

export default EmployeesSlice.reducer;
