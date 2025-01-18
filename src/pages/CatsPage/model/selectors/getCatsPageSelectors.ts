import { StateSchema } from '@/app/providers/StoreProvider'

export const getCatsPageIsLoading = (state: StateSchema) =>
    state.catList?.isLoading || false

export const getCatsPageError = (state: StateSchema) =>
    state.catList?.error || ''

export const getCatsPageNum = (state: StateSchema) => state.catList?.page || 1

export const getCatsPageLimit = (state: StateSchema) =>
    state.catList?.limit || 15

export const getCatsPageHasMore = (state: StateSchema) => state.catList.hasMore

export const getCatsPageHasInited = (state: StateSchema) =>
    state.catList._inited
