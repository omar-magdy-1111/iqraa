import { configureStore } from '@reduxjs/toolkit';
import quranSlice from './slices/quranSlice';
import surahSlice from './slices/surahSlice';
import tafserSlice from './slices/tafserSlice';


export const store = configureStore({
    reducer: {
        allQuran: quranSlice,
        surah: surahSlice,
        tafser: tafserSlice
    },
});