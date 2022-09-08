import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    posts: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: (state, { payload }) => {
            state.posts = payload
        }
    },
})  

export const { getPosts } = postsSlice.actions;

export const postsSelector = state => state.posts;

export default postsSlice.reducer;

export function fetchPosts() {
    return async dispatch => {
        try {
            const response = await fetch('http://localhost:5000/notes');
            const data = await response.json();

            dispatch(getPosts(data));
        } catch (error) {
            console.log(error);
        }
    }
}