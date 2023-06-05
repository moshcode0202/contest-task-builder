'use client';

import { configureStore } from '@reduxjs/toolkit';
import taskEditerSlice from './taskEditerSlice';

export const store = configureStore({
    reducer: {
        taskToDo: taskEditerSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
