import { AxiosInstance } from 'axios'

import { CatListSchema } from '@/features/CatList'

import { createReduxStore } from './store'

export interface StateSchema {
    catList: CatListSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
