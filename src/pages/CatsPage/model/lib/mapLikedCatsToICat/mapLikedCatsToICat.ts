import { ICat, LikedCats } from '@/entities/Cat'

export const mapLikedCatsToICat = (likedCats: LikedCats[]): ICat[] => {
    return likedCats.map((likedCat) => ({
        id: likedCat.image_id,
        url: likedCat.image?.url || '',
        uniq: likedCat.id,
        like: true,
    }))
}
