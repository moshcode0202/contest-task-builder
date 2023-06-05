'use client';

import { createSlice } from '@reduxjs/toolkit';

const taskEditerSlice = createSlice({
    name: 'taskEditerSlice',
    initialState: [],
    reducers: {
        AddPlatformTask(state: any, action) {
            const { platform, task, value } = action.payload;
            const index = state.findIndex((data: any) => data.socialPlatform === platform);
            if (value === '') {
                if (index !== -1) {
                    state.splice(index, 1);
                }
            } else {
                // const index = state.findIndex((data: any) => data.socialPlatform === platform);
                if (index !== -1) {
                    if (state.some((data: any) => data.task === task && data.socialPlatform === platform)) {
                        state[index].link = value;
                    } else {
                        const platformTasks = state.filter((data: any) => data.socialPlatform === platform);
                        const lastTask = platformTasks[platformTasks.length - 1];
                        const lastTaskIndex = state.lastIndexOf(lastTask);
                        state.splice(lastTaskIndex + 1, 0, { socialPlatform: platform, task: task, link: value });
                    }
                } else {
                    state.push({
                        socialPlatform: platform,
                        task: task,
                        link: value,
                    });
                }
            }
        },
        AddMultipleTask(state: any, action) {
            const tasks = action.payload;
            tasks.forEach((task: any) => {
                const { platform, task: taskName, value } = task;
                if (value === '') {
                    const index = state.findIndex(
                        (data: any) => data.socialPlatform === platform && data.task === taskName
                    );
                    if (index !== -1) {
                        state.splice(index, 1);
                    }
                } else {
                    const index = state.findIndex(
                        (data: any) => data.socialPlatform === platform && data.task === taskName
                    );
                    if (index !== -1) {
                        state[index].link = value;
                    } else {
                        state.push({
                            socialPlatform: platform,
                            task: taskName,
                            link: value,
                        });
                    }
                }
            });
        },
        removeSingleTask(state, action) {
            const { platform, task } = action.payload;

            const index = state.findIndex((data: any) => data.socialPlatform === platform && data.task === task);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        removeAllPlatformTask(state, action) {
            const { taskTitle } = action.payload;

            const filteredState = state.filter((data: any) => {
                const socialPlatform = data.socialPlatform.replace(/_/g, ' ');
                return socialPlatform.toLowerCase() !== taskTitle.toLowerCase();
            });

            return filteredState;
        },
        updateTaskToList(state, action) {
            return [...action.payload];
        },
    },
});

export const { AddPlatformTask, removeAllPlatformTask, removeSingleTask, AddMultipleTask, updateTaskToList } =
    taskEditerSlice.actions;
export default taskEditerSlice.reducer;
