import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CatSchema, ICat } from '../types/cat'

const initialState: CatSchema = {
    likedCats: [],
}

export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        setIsLiked: (state, action: PayloadAction<ICat>) => {
            const existingCat = state.likedCats.find(
                (cat) => cat.id === action.payload.id,
            )

            if (existingCat) {
                state.likedCats = state.likedCats.filter(
                    (cat) => cat.id !== action.payload.id,
                )
            } else {
                state.likedCats.push({ ...action.payload, like: true })
            }
        },
    },
})

export const { actions: catActions } = catSlice
export const { reducer: catReducer } = catSlice
