import { createSelector } from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider'

import { ICat } from '../types/cat'

export const getLikedCats = (state: StateSchema) => state.cat.likedCats

export const isCatLiked = (id: string) =>
    createSelector([getLikedCats], (likedCats) =>
        likedCats.some((cat: ICat) => cat.id === id),
    )
