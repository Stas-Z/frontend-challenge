import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'

interface DeleteFavoritesProps {
    catId: string
    uniq?: number
}

export interface DeleteFavoritesResponse {
    catId: string
}

export const deleteFavorites = createAsyncThunk<
    DeleteFavoritesResponse,
    DeleteFavoritesProps,
    ThunkConfig<string>
>('cat/deleteFavorites', async ({ uniq, catId }, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
        const response = await extra.api.delete(`v1/favourites/${uniq}`)

        if (!response.data) {
            throw new Error()
        }

        return { ...response.data, catId }
    } catch (e: any) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message)
        }
        return rejectWithValue(e.message)
    }
})
