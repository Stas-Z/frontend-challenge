import { createSelector } from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider'

import { catListAdapter } from '../slice/catListSlice'
import { CatListSchema } from '../types/catListSchema'

export const getCatListIsLoading = (state: StateSchema) =>
    state.catList?.isLoading || false

export const getCatListError = (state: StateSchema) =>
    state.catList?.error || ''

export const getCatListPage = (state: StateSchema) => state.catList?.page || 1

export const getCatListLimit = (state: StateSchema) =>
    state.catList?.limit || 15

const selectCatListState = (state: StateSchema) =>
    state.catList || catListAdapter.getInitialState()

export const getCatListIsLiked = createSelector(
    [selectCatListState],
    (catListState: CatListSchema) =>
        catListAdapter
            .getSelectors()
            .selectAll(catListState)
            .filter((cat) => cat.like === true),
)
