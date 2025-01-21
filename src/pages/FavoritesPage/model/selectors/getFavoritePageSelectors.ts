import { StateSchema } from '@/app/providers/StoreProvider'

export const getFavoritePageNum = (state: StateSchema) =>
    state.favoriteList?.page || 1

export const getFavoritePageLimit = (state: StateSchema) =>
    state.favoriteList?.limit || 15

export const getFavoritePageHasMore = (state: StateSchema) =>
    state.favoriteList.hasMore
