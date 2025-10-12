import { createSlice } from "@reduxjs/toolkit";

const searchGPTSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearchToggle : false
    },
    reducers: {
        gptSearchToggle: (state,action)=>{
            state.gptSearchToggle = !state.gptSearchToggle
        }
    }
})

export const {gptSearchToggle} = searchGPTSlice.actions;
export default searchGPTSlice.reducer;