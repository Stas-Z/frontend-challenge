import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { ICat } from '@/entities/Cat'

import {
    getCatListLimit,
    getCatListPage,
} from '../selectors/getCatListSelectors'

export const fetchCatList = createAsyncThunk<ICat[], void, ThunkConfig<string>>(
    'catList/fetchCatList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const page = getCatListPage(getState())
        const limit = getCatListLimit(getState())

        try {
            const response = await extra.api.get<ICat[]>('v1/images/search', {
                params: {
                    limit,
                    page,
                },
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e: any) {
            if (e.response && e.response.data.message) {
                return rejectWithValue(e.response.data.message)
            }
            return rejectWithValue(e.message)
        }
    },
)
