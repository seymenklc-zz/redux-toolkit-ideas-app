import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState = [];

const ideaSlice = createSlice({
    name: 'idea',
    initialState,
    reducers: {
        add: (state, action) => {
            const newIdea = {
                id: uuid(),
                title: action.payload.title,
                body: action.payload.body,
                importantStatus: action.payload.isImportant,
                completed: false,
            };
            state.push(newIdea);
        },
        remove: (state, action) => {
            return state.filter(idea => idea.id !== action.payload.id);
        },
        complete: (state, action) => {
            return state.map(idea => idea.id === action.payload.id
                ? { ...idea, completed: !idea.completed } : idea);
        },
        important: (state, action) => {
            return state.map(idea => idea.id === action.payload.id
                ? { ...idea, importantStatus: idea.importantStatus === 'regular' ? 'important' : 'regular' } : idea);
        }
    }
});

export default ideaSlice.reducer;
export const { add, remove, complete, important } = ideaSlice.actions;