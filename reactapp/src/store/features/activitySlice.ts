import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../index";
import {TypeForm} from "../../models/enum/TypeForm";
import {ValuesActivity} from "../../models/RequestNewRequisite";

export interface InitialType {
    typeActivity: TypeForm,
    showBankDetails: boolean,
    activityValues: ValuesActivity
}

const initialState: InitialType = {
    typeActivity: TypeForm.Individual,
    showBankDetails: false,
    activityValues: {}
}

export const activitySlice = createSlice({
    name: 'activitySlice',
    initialState,
    reducers: {
        setTypeActivity: (state, action: PayloadAction<TypeForm>) => {
            state.typeActivity = action.payload;
        },
        setShowBankDetails: (state, action: PayloadAction<boolean>) => {
            state.showBankDetails = action.payload;
        },
        setActivityValues: (state, action: PayloadAction<ValuesActivity>) => {
            state.activityValues = action.payload;
        }
    },
})

export default activitySlice.reducer;

export const {
    setTypeActivity,
    setActivityValues,
    setShowBankDetails
} = activitySlice.actions;

export const selectActivity = (state: RootState) => state.activity;