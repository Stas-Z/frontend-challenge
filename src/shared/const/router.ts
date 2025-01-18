export enum AppRoutes {
    MAIN_PAGE = 'main_page',
    FAVORITES_PAGE = 'favorites_page',

    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/'
export const getRouteFavorites = () => '/favorites'
export const getRouteForbidden = () => '/forbidden'
