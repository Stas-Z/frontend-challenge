import { EntityState } from '@reduxjs/toolkit'

import { ICat } from '@/entities/Cat'

export interface FavoritePageSchema extends EntityState<ICat, string> {
    isLoading?: boolean
    error?: string
    _inited_favorite: boolean

    // pagination
    page: number
    limit: number
    hasMore: boolean
}
