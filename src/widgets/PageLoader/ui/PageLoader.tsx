import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Loader } from '@/shared/ui/Loader'

import cls from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
))
