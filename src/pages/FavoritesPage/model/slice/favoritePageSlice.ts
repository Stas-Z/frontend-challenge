import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider'
import { ICat } from '@/entities/Cat'

import { fetchFavoriteCats } from '../services/fetchFavoriteCats/fetchFavoriteCats'
import { FavoritePageSchema } from '../types/favoritePageSchema'

export const favoriteListAdapter = createEntityAdapter<ICat, string>({
    selectId: (cat: ICat) => cat.id,
})

export const getFavoriteList = favoriteListAdapter.getSelectors<StateSchema>(
    (state) => state.favoriteList || favoriteListAdapter.getInitialState(),
)

export const favoritePageSlice = createSlice({
    name: 'favoritePageSlice',
    initialState: favoriteListAdapter.getInitialState<FavoritePageSchema>({
        limit: 15,
        page: 1,
        hasMore: true,
        _inited_favorite: false,
        isLoading: false,
        error: '',
        ids: [],
        entities: {},
    }),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
        setHasMore: (state) => {
            state.hasMore = true
        },
        initState: (state, action: PayloadAction<boolean>) => {
            state._inited_favorite = action.payload
        },
        removeFromLiked: favoriteListAdapter.removeOne,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavoriteCats.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(fetchFavoriteCats.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasMore = action.payload.length >= state.limit
                favoriteListAdapter.addMany(state, action.payload)
            })
            .addCase(fetchFavoriteCats.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: favoritePageActions } = favoritePageSlice
export const { reducer: favoritePageReducer } = favoritePageSlice
