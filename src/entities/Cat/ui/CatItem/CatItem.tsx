import { memo, useCallback } from 'react'

import { useSelector } from 'react-redux'

import { USER_ID } from '@/shared/const/user'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AppImage } from '@/shared/ui/AppImage'
import { Card } from '@/shared/ui/Card'
import { HeartAnimationIcon } from '@/shared/ui/HeartAnimation'
import { HeartIcon } from '@/shared/ui/HeartIcon'
import { Skeleton } from '@/shared/ui/Skeleton'

import cls from './CatItem.module.scss'
import {
    getAddedCatId,
    getDeletedCatId,
} from '../../model/selectors/getCatSelectors'
import { addToFavorites } from '../../model/services/addToFavorites/addToFavorites'
import { deleteFavorites } from '../../model/services/deleteFavorites/deleteFavorites'
import { ICat } from '../../model/types/cat'

interface CatProps {
    className?: string
    cat: ICat
}

export const CatItem = memo((props: CatProps) => {
    const { className, cat } = props

    const dispatch = useAppDispatch()

    const addedCatId = useSelector(getAddedCatId)
    const deletedCatId = useSelector(getDeletedCatId)

    const isAddedLike = addedCatId === cat.id
    const isDeletedLike = deletedCatId === cat.id

    const isLiked = Boolean(cat.uniq)

    const onClickHandler = useCallback(() => {
        if (isLiked) {
            dispatch(deleteFavorites({ uniq: cat.uniq, catId: cat.id }))
        } else {
            dispatch(
                addToFavorites({
                    imageId: cat.id,
                    subId: USER_ID,
                    url: cat.url,
                }),
            )
        }
    }, [cat.id, cat.uniq, cat.url, dispatch, isLiked])

    return (
        <Card className={classNames(cls.catItem, {}, [className])}>
            <div className={cls.shadowWraper}>
                {/*  Это не от балды! Это у вас так в макете :) */}
                <div className={cls.shadowWraper2}>
                    <AppImage
                        src={cat.url}
                        alt="cat"
                        className={cls.img}
                        fallback={<Skeleton width={225} height={225} />}
                    />
                    <HeartAnimationIcon
                        isAddedLike={isAddedLike}
                        isDeletedLike={isDeletedLike}
                    />
                    <HeartIcon
                        className={cls.likeIcon}
                        isLiked={isLiked}
                        onClick={onClickHandler}
                    />
                </div>
            </div>
        </Card>
    )
})
