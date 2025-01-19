import { memo } from 'react'

import HeartFull from '@/shared/assets/icons/heart-full.svg?react'
import Heart from '@/shared/assets/icons/heart.svg?react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { useHover } from '@/shared/lib/hooks/useHover/useHover'

import cls from './HeartIcon.module.scss'
import { Icon } from '../Icon'

interface HeartIconProps {
    className?: string
    onClick: () => void
    isLiked: boolean
}

export const HeartIcon = memo((props: HeartIconProps) => {
    const { className, onClick, isLiked } = props
    const [isHover, bindHover] = useHover()

    const HeartIcon = isHover || isLiked ? HeartFull : Heart
    const mod: Mods = { [cls.clicked]: isLiked }
    return (
        <Icon
            onClick={onClick}
            clickable
            {...bindHover}
            Svg={HeartIcon}
            className={classNames(cls.heartIcon, mod, [className])}
        />
    )
})
