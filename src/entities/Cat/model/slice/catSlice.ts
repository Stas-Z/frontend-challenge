import { createSlice } from '@reduxjs/toolkit'

import { addToFavorites } from '../services/addToFavorites/addToFavorites'
import { deleteFavorites } from '../services/deleteFavorites/deleteFavorites'
import { CatSchema } from '../types/cat'

const initialState: CatSchema = {
    error: false,
    isLoading: false,
    addedCatId: '',
    deletedCatId: '',
}

export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToFavorites.pending, (state, action) => {
                state.isLoading = true
                state.error = false
                state.addedCatId = action.meta.arg.imageId
            })
            .addCase(addToFavorites.fulfilled, (state) => {
                state.isLoading = false
                state.addedCatId = ''
            })
            .addCase(addToFavorites.rejected, (state) => {
                state.isLoading = false
                state.error = true
                state.addedCatId = ''
            })
            .addCase(deleteFavorites.pending, (state, action) => {
                state.isLoading = true
                state.error = false
                state.deletedCatId = action.meta.arg.catId
            })
            .addCase(deleteFavorites.fulfilled, (state) => {
                state.isLoading = false
                state.deletedCatId = ''
            })
            .addCase(deleteFavorites.rejected, (state) => {
                state.isLoading = false
                state.error = true
                state.deletedCatId = ''
            })
    },
})

export const { actions: catActions } = catSlice
export const { reducer: catReducer } = catSlice
