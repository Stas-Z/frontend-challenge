import { HTMLAttributes, ReactNode } from 'react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'

import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    max?: boolean
}

export const Card = (props: CardProps) => {
    const { className, children, max, ...otherProps } = props

    const mods: Mods = {
        [cls.max]: max,
    }

    return (
        <div
            className={classNames(cls.card, mods, [className])}
            {...otherProps}
        >
            {children}
        </div>
    )
}
