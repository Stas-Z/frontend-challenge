import { EntityState } from '@reduxjs/toolkit'

import { ICat } from '@/entities/Cat'

export interface CatsPageSchema extends EntityState<ICat, string> {
    isLoading?: boolean
    error?: string
    _inited: boolean

    // pagination
    page: number
    limit: number
    hasMore: boolean
}
