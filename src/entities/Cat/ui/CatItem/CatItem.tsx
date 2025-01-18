import { memo, useCallback } from 'react'

import { useSelector } from 'react-redux'

import HeartFull from '@/shared/assets/icons/heart-full.svg?react'
import Heart from '@/shared/assets/icons/heart.svg?react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useHover } from '@/shared/lib/hooks/useHover/useHover'
import { AppImage } from '@/shared/ui/AppImage'
import { Card } from '@/shared/ui/Card'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'

import cls from './CatItem.module.scss'
import { isCatLiked } from '../../model/selectors/getLikedCats'
import { catActions } from '../../model/slice/catSlice'
import { ICat } from '../../model/types/cat'

interface CatProps {
    className?: string
    cat: ICat
}

export const CatItem = memo((props: CatProps) => {
    const { className, cat } = props

    const dispatch = useAppDispatch()

    const isLiked = useSelector(isCatLiked(cat.id))

    const [isHover, bindHover] = useHover()

    const onClickHandler = useCallback(() => {
        dispatch(catActions.setIsLiked(cat))
    }, [cat, dispatch])

    const mod: Mods = { [cls.clicked]: isLiked }

    const HeartIcon = isHover || isLiked ? HeartFull : Heart

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
                    <Icon
                        onClick={onClickHandler}
                        clickable
                        {...bindHover}
                        Svg={HeartIcon}
                        className={classNames(cls.likeIcon, mod, [className])}
                    />
                    <div className={cls.blur} />
                </div>
            </div>
        </Card>
    )
})
