import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState: { nowPlayingMovies: null, trailerVideo: null}, popularPlayingMovies: null,
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularPlayingMovies: (state,action)=>{
            state.popularPlayingMovies = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;