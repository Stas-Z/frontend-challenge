export const AppRoutes = {
    CATS_PAGE: 'cats_page',
    FAVORITES_PAGE: 'favorites_page',

    NOT_FOUND: 'not_found',
} as const

export type AppRoutesTypes = ValueOf<typeof AppRoutes>

export const getRouteCats = () => '/'
export const getRouteFavorites = () => '/favorites'
export const getRouteForbidden = () => '/forbidden'
