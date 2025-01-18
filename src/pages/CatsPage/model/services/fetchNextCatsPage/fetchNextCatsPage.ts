import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'

import {
    getCatsPageHasMore,
    getCatsPageIsLoading,
    getCatsPageNum,
} from '../../selectors/getCatsPageSelectors'
import { catsPageActions } from '../../slice/catsPageSlice'
import { fetchCatList } from '../fetchCatList/fetchCatList'

export const fetchNextCatsPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('catsPage/fetchNextCatsPage', async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI

    const hasMore = getCatsPageHasMore(getState())
    const page = getCatsPageNum(getState())
    const isLoading = getCatsPageIsLoading(getState())

    if (hasMore && !isLoading) {
        dispatch(catsPageActions.setPage(page + 1))
        dispatch(fetchCatList())
    }
})
