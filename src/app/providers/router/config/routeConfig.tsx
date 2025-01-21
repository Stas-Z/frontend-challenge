import { RouteProps } from 'react-router-dom'

import { CatsPage } from '@/pages/CatsPage'
import { FavoritesPage } from '@/pages/FavoritesPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import {
    AppRoutes,
    AppRoutesTypes,
    getRouteCats,
    getRouteFavorites,
} from '@/shared/const/router'

export const routeConfig: Record<AppRoutesTypes, RouteProps> = {
    [AppRoutes.CATS_PAGE]: {
        path: getRouteCats(),
        element: <CatsPage />,
    },
    [AppRoutes.FAVORITES_PAGE]: {
        path: getRouteFavorites(),
        element: <FavoritesPage />,
    },

    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
}
