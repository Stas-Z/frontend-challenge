import { StateSchema } from '@/app/providers/StoreProvider'

export const getFavoritePageIsLoading = (state: StateSchema) =>
    state.favoriteList?.isLoading || false

export const getFavoritePageError = (state: StateSchema) =>
    state.favoriteList?.error || ''

export const getFavoritePageNum = (state: StateSchema) =>
    state.favoriteList?.page || 1

export const getFavoritePageLimit = (state: StateSchema) =>
    state.favoriteList?.limit || 15

export const getFavoritePageHasMore = (state: StateSchema) =>
    state.favoriteList.hasMore

export const getFavoritePageHasInited = (state: StateSchema) =>
    state.favoriteList._inited_favorite
