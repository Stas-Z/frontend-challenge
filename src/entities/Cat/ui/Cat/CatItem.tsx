import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './CatItem.module.scss'
import { ICat } from '../../model/types/cat'

interface CatProps {
    className?: string
    cat: ICat
}

export const CatItem = memo((props: CatProps) => {
    const { className, cat } = props

    return (
        <div className={classNames(cls.catItem, {}, [className])}>
            <img src={cat.url} alt="cat" />
        </div>
    )
})
