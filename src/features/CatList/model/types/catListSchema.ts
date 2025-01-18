import { EntityState } from '@reduxjs/toolkit'

import { ICat } from '@/entities/Cat'

export interface CatListSchema extends EntityState<ICat, string> {
    limit?: number
    page?: number
    isLoading?: boolean
    error?: string
}
