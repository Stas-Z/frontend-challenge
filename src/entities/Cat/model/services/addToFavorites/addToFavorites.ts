import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'

interface AddToFavoritesProps {
    imageId: string
    subId: string
}
export interface AddToFavoritesResponse {
    message: string
    id: number
    image_id: string
}

export const addToFavorites = createAsyncThunk<
    AddToFavoritesResponse,
    AddToFavoritesProps,
    ThunkConfig<string>
>('cat/addToFavorites', async ({ imageId, subId }, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
        const response = await extra.api.post<AddToFavoritesResponse>(
            'v1/favourites',
            {
                image_id: imageId,
                sub_id: subId,
            },
        )

        if (!response.data) {
            throw new Error()
        }

        return {
            ...response.data,
            image_id: imageId,
        }
    } catch (e: any) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message)
        }
        return rejectWithValue(e.message)
    }
})
