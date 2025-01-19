import { Middleware } from '@reduxjs/toolkit'

import { addToFavorites, deleteFavorites } from '@/entities/Cat'
import { catsPageActions } from '@/pages/CatsPage'
import { favoritePageActions } from '@/pages/FavoritesPage'

export const updateCatLikeMiddleware: Middleware =
    (store) => (next) => (action) => {
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
            }
        }

        if (deleteFavorites.fulfilled.match(action)) {
            const { payload } = action
            if (payload) {
                store.dispatch(
                    favoritePageActions.removeFromLiked(payload.catId),
                )
                store.dispatch(
                    catsPageActions.updateCatLike({
                        id: payload.catId,
                        changes: {
                            uniq: 0,
                        },
                    }),
                )
            }
        }

        return result
    }
