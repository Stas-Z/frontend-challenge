import { Middleware } from '@reduxjs/toolkit'

import { addToFavorites, deleteFavorites, ICat } from '@/entities/Cat'
import { catsPageActions } from '@/pages/CatsPage'
import { favoritesPageApi } from '@/pages/FavoritesPage'

import { AppDispatch, StateSchema } from '../providers/StoreProvider'

interface Store {
    dispatch: AppDispatch
    getState: () => StateSchema
}

const updateFavoritePage = (
    store: Store,
    page: number,
    updater: (draft: ICat[]) => void,
) => {
    store.dispatch(
        favoritesPageApi.util.updateQueryData(
            'getFavoritePageList',
            { page },
            updater,
        ),
    )
}

export const updateCatLikeMiddleware: Middleware =
    (store: Store) => (next) => (action) => {
        const result = next(action)

        if (addToFavorites.fulfilled.match(action)) {
            const { payload } = action
            if (payload && typeof payload !== 'string') {
                store.dispatch(
                    catsPageActions.updateCatLike({
                        id: payload.image_id,
                        changes: {
                            uniq: payload.id,
                        },
                    }),
                )

                const state = store.getState()
                const { page, hasMore } = state.favoriteList
                if (!hasMore) {
                    updateFavoritePage(store, page, (draft) => {
                        draft.push({
                            id: payload.image_id,
                            url: payload.url,
                            uniq: payload.id,
                            like: true,
                        })
                    })
                }
            }
        }

        if (deleteFavorites.fulfilled.match(action)) {
            const { payload } = action
            if (payload) {
                store.dispatch(
                    catsPageActions.updateCatLike({
                        id: payload.catId,
                        changes: {
                            uniq: 0,
                        },
                    }),
                )

                const state = store.getState()
                const { page } = state.favoriteList

                updateFavoritePage(store, page, (draft) => {
                    const index = draft.findIndex(
                        (cat) => cat.id === payload.catId,
                    )
                    if (index !== -1) {
                        draft.splice(index, 1)
                    }
                })
            }
        }

        return result
    }
