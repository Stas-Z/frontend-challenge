import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { AppImage } from '@/shared/ui/AppImage'
import { Card } from '@/shared/ui/Card'
import { Skeleton } from '@/shared/ui/Skeleton'

import cls from './CatItem.module.scss'
import { ICat } from '../../model/types/cat'

interface CatProps {
    className?: string
    cat: ICat
}

export const CatItem = memo((props: CatProps) => {
    const { className, cat } = props

    return (
        <Card className={classNames(cls.catItem, {}, [className])}>
            <div className={cls.shadowWraper}>
                <div className={cls.shadowWraper2}>
                    <AppImage
                        src={cat.url}
                        alt="cat"
                        className={cls.img}
                        fallback={<Skeleton width={225} height={225} />}
                    />
                    <div className={cls.blur} />
                </div>
            </div>
        </Card>
    )
})
