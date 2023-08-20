import {combineReducers, configureStore} from '@reduxjs/toolkit'
import activitySlice from "./features/activitySlice";

const rootReducers = combineReducers({
    activity: activitySlice
})

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['setActivityValues'],
                // Ignore these field paths in all actions
                ignoredActionPaths: [
                    'payload.ScanINN',
                    'payload.ScanOGRNIP',
                    'payload.ScanOfAnExtractFromTheUSRIP',
                    'payload.ScanLeaseAgreementPremises',
                    'payload.ScanOGRN',
                ],
                // Ignore these paths in the state
                ignoredPaths: [
                    'activity.activityValues.ScanINN',
                    'activity.activityValues.ScanOGRNIP',
                    'activity.activityValues.ScanOfAnExtractFromTheUSRIP',
                    'activity.activityValues.ScanLeaseAgreementPremises',
                    'activity.activityValues.ScanOGRN',
                ],
            },
        }),
})

export type RootState = ReturnType<typeof store.getState>;