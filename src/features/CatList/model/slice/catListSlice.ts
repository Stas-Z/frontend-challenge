import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider'
import { ICat } from '@/entities/Cat'

import { fetchCatList } from '../services/fetchCatList'
import { CatListSchema } from '../types/catListSchema'

export const catListAdapter = createEntityAdapter<ICat, string>({
    selectId: (cat: ICat) => cat.id,
})

export const getCatList = catListAdapter.getSelectors<StateSchema>(
    (state) => state.catList || catListAdapter.getInitialState(),
)

export const catListSlice = createSlice({
    name: 'catListSlice',
    initialState: catListAdapter.getInitialState<CatListSchema>({
        limit: 15,
        page: 1,
        isLoading: false,
        error: '',
        ids: [],
        entities: {},
    }),
    reducers: {
        updateCat: catListAdapter.updateOne,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatList.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(fetchCatList.fulfilled, (state, action) => {
                state.isLoading = false
                catListAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCatList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: catListActions } = catListSlice
export const { reducer: catListReducer } = catListSlice
