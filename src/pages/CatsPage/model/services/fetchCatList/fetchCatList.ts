import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { ICat } from '@/entities/Cat'

import {
    getCatsPageLimit,
    getCatsPageNum,
} from '../../selectors/getCatsPageSelectors'

export const fetchCatList = createAsyncThunk<ICat[], void, ThunkConfig<string>>(
    'catsPage/fetchCatList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const page = getCatsPageNum(getState())
        const limit = getCatsPageLimit(getState())

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
