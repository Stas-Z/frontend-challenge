import { RouteProps } from 'react-router-dom'

import { FavoritesPage } from '@/pages/FavoritesPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import {
    AppRoutes,
    getRouteFavorites,
    getRouteMain,
} from '@/shared/const/router'

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN_PAGE]: {
        path: getRouteMain(),
        element: <MainPage />,
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
