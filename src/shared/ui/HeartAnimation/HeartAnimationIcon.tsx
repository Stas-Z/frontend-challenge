import { memo } from 'react'

import HeartBoom from '@/shared/assets/icons/heart-boom.svg?react'
import HeartCraked from '@/shared/assets/icons/heart-cracked.svg?react'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './HeartAnimationIcon.module.scss'
import { Icon } from '../Icon'

interface HeartAnimationIconProps {
    isAddedLike: boolean
    isDeletedLike: boolean
    className?: string
}

export const HeartAnimationIcon = memo((props: HeartAnimationIconProps) => {
    const { isAddedLike, isDeletedLike, className } = props
    let LoaderIcon = null

    if (isAddedLike) {
        LoaderIcon = HeartBoom
    } else if (isDeletedLike) {
        LoaderIcon = HeartCraked
    }

    return LoaderIcon ? (
        <Icon
            width={225}
            height={225}
            Svg={LoaderIcon}
            className={classNames(
                '',
                {
                    [cls.deleted]: isDeletedLike,
                    [cls.heartAnimation]: isAddedLike,
                },
                [className],
            )}
        />
    ) : null
})
