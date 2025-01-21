import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FavoritePageSchema } from '../types/favoritePageSchema'

const initialState: FavoritePageSchema = {
    limit: 15,
    page: 1,
    hasMore: true,
}

export const favoritePageSlice = createSlice({
    name: 'favoritePageSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload
        },
    },
})

export const { actions: favoritePageActions } = favoritePageSlice
export const { reducer: favoritePageReducer } = favoritePageSlice
