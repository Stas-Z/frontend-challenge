import { ICat, LikedCats } from '@/entities/Cat'
import { rtkApi } from '@/shared/api/rtkApi'
import { USER_ID } from '@/shared/const/user'

import { mapLikedCatsToICat } from '../model/lib/mapLikedCatsToICat/mapLikedCatsToICat'
import { favoritePageActions } from '../model/slice/favoritePageSlice'

export interface FetchFavoritesPageProps {
    page: number
}

export const favoritesPageApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getFavoritePageList: build.query<ICat[], FetchFavoritesPageProps>({
            query: ({ page }) => ({
                url: '/v1/favourites',
                method: 'GET',
                params: {
                    limit: 15,
                    page,
                    sub_id: USER_ID,
                },
            }),
            transformResponse: (response: LikedCats[]): ICat[] => {
                return mapLikedCatsToICat(response)
            },
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
            onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled
                if (data.length === 0) {
                    dispatch(favoritePageActions.setHasMore(false))
                }
            },
        }),
    }),
})

export const useGetFavoritesPage = favoritesPageApi.useGetFavoritePageListQuery
