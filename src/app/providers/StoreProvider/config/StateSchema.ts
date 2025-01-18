import { AxiosInstance } from 'axios'

import { CatSchema } from '@/entities/Cat'
import { CatListSchema } from '@/features/CatList'

import { createReduxStore } from './store'

export interface StateSchema {
    cat: CatSchema
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
