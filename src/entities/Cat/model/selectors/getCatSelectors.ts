import { StateSchema } from '@/app/providers/StoreProvider'

export const getCatIsLoading = (state: StateSchema) => state.cat.isLoading
export const getCatError = (state: StateSchema) => state.cat.error
export const getAddedCatId = (state: StateSchema) => state.cat.addedCatId
export const getDeletedCatId = (state: StateSchema) => state.cat.deletedCatId
