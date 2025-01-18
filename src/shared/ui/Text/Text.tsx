import { HTMLAttributes, memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Text.module.scss'

interface TextProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    title?: string
    text?: string
}

export const Text = memo((props: TextProps) => {
    const { className, text, title, ...otherProps } = props

    return (
        <div {...otherProps} className={classNames(cls.text, {}, [])}>
            {title && (
                <h1 className={classNames(cls.title, {}, [className])}>
                    {title}
                </h1>
            )}
            {text && (
                <p className={classNames(cls.text, {}, [className])}>{text}</p>
            )}
        </div>
    )
})
