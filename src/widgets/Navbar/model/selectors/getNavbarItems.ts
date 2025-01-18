import { getRouteCats, getRouteFavorites } from '@/shared/const/router'

import { NavbarItemType } from '../types/navbar'

export const useNavbarItems = () => {
    const sidebarItemsList: NavbarItemType[] = [
        {
            id: 1,
            path: getRouteCats(),
            text: 'Все котики',
        },
        {
            id: 2,
            path: getRouteFavorites(),
            text: 'Любимые котики',
        },
    ]

    return sidebarItemsList
}
