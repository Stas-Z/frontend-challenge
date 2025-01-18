export interface ICat {
    id: string
    url: string
    like: boolean
}

export interface CatSchema {
    likedCats: ICat[]
}
