import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    recipes: []
}

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        getRecipesSuccess: (state, { payload }) => {
            state.recipes = payload
        }
    },
})  

export const { getRecipesSuccess } = recipesSlice.actions;

export const recipesSelector = state => state.recipes;

export default recipesSlice.reducer;

export function fetchRecipes() {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:5000/notes');
            const data = await response.json();

            dispatch(getRecipesSuccess(data));
        } catch (error) {
            console.log(error);
        }
    }
}