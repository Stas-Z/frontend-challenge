import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider'
import { ICat } from '@/entities/Cat'

import { fetchCatList } from '../services/fetchCatList/fetchCatList'
import { CatsPageSchema } from '../types/catsPageSchema'

export const catListAdapter = createEntityAdapter<ICat, string>({
    selectId: (cat: ICat) => cat.id,
})

export const getCatList = catListAdapter.getSelectors<StateSchema>(
    (state) => state.catList || catListAdapter.getInitialState(),
)

export const catsPageSlice = createSlice({
    name: 'catsPageSlice',
    initialState: catListAdapter.getInitialState<CatsPageSchema>({
        limit: 15,
        page: 1,
        hasMore: true,
        _inited: false,
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
        initState: (state) => {
            state._inited = true
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatList.pending, (state) => {
                state.isLoading = true
                state.error = ''
            })
            .addCase(fetchCatList.fulfilled, (state, action) => {
                state.isLoading = false
                catListAdapter.addMany(state, action.payload)
            })
            .addCase(fetchCatList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: catsPageActions } = catsPageSlice
export const { reducer: catsPageReducer } = catsPageSlice
