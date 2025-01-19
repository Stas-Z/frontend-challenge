import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'

import {
    getFavoritePageHasMore,
    getFavoritePageIsLoading,
    getFavoritePageNum,
} from '../../selectors/getFavoritePageSelectors'
import { favoritePageActions } from '../../slice/favoritePageSlice'
import { fetchFavoriteCats } from '../fetchFavoriteCats/fetchFavoriteCats'

export const fetchNextCatsPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('catsPage/fetchNextCatsPage', async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI

    const hasMore = getFavoritePageHasMore(getState())
    const page = getFavoritePageNum(getState())
    const isLoading = getFavoritePageIsLoading(getState())

    if (hasMore && !isLoading) {
        dispatch(favoritePageActions.setPage(page + 1))

        dispatch(fetchFavoriteCats())
    }
})
