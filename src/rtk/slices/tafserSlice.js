import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const tafserAPI = createAsyncThunk("tafser/tafserAPI", async (param) => {

    let res = await fetch(`http://api.quran-tafseer.com/tafseer/1/${param.surahID}/${param.ayah}`);
    let resJson = await res.json();
    return resJson;
});



export const tafserSlice = createSlice({
    name: 'tafser',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(tafserAPI.fulfilled, (state, action) => {
            return action.payload;
        });
    }

});


export default tafserSlice.reducer;