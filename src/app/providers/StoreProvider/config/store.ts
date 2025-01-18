import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { catReducer } from '@/entities/Cat'
import { catsPageReducer } from '@/pages/CatsPage'
import { $api } from '@/shared/api/api'

import { StateSchema, ThunkExtraArg } from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        cat: catReducer,
        catList: catsPageReducer,
    }

    const extraArg: ThunkExtraArg = {
        api: $api,
    }

    const store = configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    })

    return store
}
