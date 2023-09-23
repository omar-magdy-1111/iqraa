import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const surahAPI = createAsyncThunk("surahSlice/surahAPI", async (number) => {
    let res = await fetch(`http://api.alquran.cloud/v1/surah/${number}`);
    let resJson = await res.json();
    return resJson.data;
});



const surahSlice = createSlice({
    name: "surahSlice",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(surahAPI.fulfilled, (state, action) => {
            return state = action.payload;
        });
    }
});


export default surahSlice.reducer;