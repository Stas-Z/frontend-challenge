export { favoritesPageApi } from './api/favoritesPageApi'

export type { FavoritePageSchema } from './model/types/favoritePageSchema'

export {
    favoritePageReducer,
    favoritePageActions,
} from './model/slice/favoritePageSlice'

export { FavoritesPageAsync as FavoritesPage } from './ui/FavoritesPage/FavoritesPage.async'
