import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const API = createAsyncThunk("quranSlice/API", async () => {
    let res = await fetch('http://api.alquran.cloud/v1/quran/quran-uthmani');
    let resJson = await res.json();
    return resJson.data.surahs;
});



const quranSlice = createSlice({
    name: "quranSlice",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.fulfilled, (state, action) => {
            return  action.payload;
        });
    }
});


export default quranSlice.reducer;