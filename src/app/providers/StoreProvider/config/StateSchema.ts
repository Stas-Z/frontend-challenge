import { AxiosInstance } from 'axios'

import { CatSchema } from '@/entities/Cat'
import { CatsPageSchema } from '@/pages/CatsPage'
import { FavoritePageSchema } from '@/pages/FavoritesPage'

import { createReduxStore } from './store'

export interface StateSchema {
    cat: CatSchema
    catList: CatsPageSchema
    favoriteList: FavoritePageSchema
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
