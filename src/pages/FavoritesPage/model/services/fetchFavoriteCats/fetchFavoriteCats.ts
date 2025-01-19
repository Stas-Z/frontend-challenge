import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { ICat, LikedCats } from '@/entities/Cat'
import { USER_ID } from '@/shared/const/user'

import { mapLikedCatsToICat } from '../../lib/mapLikedCatsToICat/mapLikedCatsToICat'
import {
    getFavoritePageLimit,
    getFavoritePageNum,
} from '../../selectors/getFavoritePageSelectors'

export const fetchFavoriteCats = createAsyncThunk<
    ICat[],
    void,
    ThunkConfig<string>
>('favoritesPage/fetchFavoriteCats', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const page = getFavoritePageNum(getState())
    const limit = getFavoritePageLimit(getState())
    const subId = USER_ID

    try {
        const response = await extra.api.get<LikedCats[]>('v1/favourites', {
            params: {
                limit,
                page,
                sub_id: subId,
            },
        })

        if (!response.data) {
            throw new Error()
        }

        return mapLikedCatsToICat(response.data)
    } catch (e: any) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message)
        }
        return rejectWithValue(e.message)
    }
})
