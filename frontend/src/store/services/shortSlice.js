import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../shortAxios";

export const createPost = createAsyncThunk(
    'links/short',
    async (shortUrl) => {
        return await axios.post('/links', { originalUrl: shortUrl }).then(res => res.data);
    }
)

const initialState = {
    valueUrl: '',
    shortUrl: '',
    error: null,
    isLoading: false
}

const createShortSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        clearInput: (state) => {
            state.valueUrl = "";
        },
        onChangeHandler: (state, action) => {
            state.valueUrl = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(createPost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.shortUrl = action.payload.shortUrl;
            })
    }
})

export default createShortSlice.reducer;
export const { clearInput, onChangeHandler } = createShortSlice.actions;