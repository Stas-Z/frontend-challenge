import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'

import { getFavoritePageHasInited } from '../../selectors/getFavoritePageSelectors'
import { favoritePageActions } from '../../slice/favoritePageSlice'
import { fetchFavoriteCats } from '../fetchFavoriteCats/fetchFavoriteCats'

export const initFavoriteCatsPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('favoritePage/initFavoriteCatsPage', async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI

    const inited = getFavoritePageHasInited(getState())

    if (!inited) {
        dispatch(favoritePageActions.initState())
        dispatch(fetchFavoriteCats())
    }
})
