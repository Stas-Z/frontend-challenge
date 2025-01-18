import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'

import { getCatsPageHasInited } from '../../selectors/getCatsPageSelectors'
import { catsPageActions } from '../../slice/catsPageSlice'
import { fetchCatList } from '../fetchCatList/fetchCatList'

export const initCatsPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'catsPage/initCatsPage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI

        const inited = getCatsPageHasInited(getState())

        if (!inited) {
            dispatch(catsPageActions.initState())
            dispatch(fetchCatList())
        }
    },
)
