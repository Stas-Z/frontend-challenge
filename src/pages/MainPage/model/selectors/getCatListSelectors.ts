import { StateSchema } from '@/app/providers/StoreProvider'

export const getCatListIsLoading = (state: StateSchema) =>
    state.catList?.isLoading || false

export const getCatListError = (state: StateSchema) =>
    state.catList?.error || ''

export const getCatListPage = (state: StateSchema) => state.catList?.page || 1

export const getCatListLimit = (state: StateSchema) =>
    state.catList?.limit || 15
