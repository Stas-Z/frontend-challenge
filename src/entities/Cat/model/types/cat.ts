export interface ICat {
    id: string
    url?: string
    like?: boolean
    uniq?: number
}

export interface LikedCats {
    id: number
    image_id: string
    image?: {
        url: string
    }
}

export interface CatSchema {
    isLoading?: boolean
    error?: boolean
    addedCatId: string
    deletedCatId: string
}
