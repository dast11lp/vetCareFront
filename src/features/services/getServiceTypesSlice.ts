import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceType } from "../../types/Service";
import { getServiceTypesThunk } from "../../api/appointments";

interface InitialState {
    serviceTypes: ServiceType[];
    loading: boolean;
    error: boolean;
}

const initialState: InitialState = {
    serviceTypes: [],
    loading: false,
    error: false,
}

const getServiceTypesSlice = createSlice({
    name: 'serviceTypes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getServiceTypesThunk.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(getServiceTypesThunk.fulfilled, (state, action: PayloadAction<ServiceType[]>) => {
            state.loading = false;
            state.serviceTypes = action.payload;
        })
        builder.addCase(getServiceTypesThunk.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
})

export default getServiceTypesSlice.reducer;