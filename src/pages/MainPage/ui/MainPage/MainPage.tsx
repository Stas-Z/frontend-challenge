import { memo } from 'react'

import { CatList } from '@/features/CatList'
import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './MainPage.module.scss'

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {
    const { className } = props

    return (
        <div className={classNames(cls.mainPage, {}, [className])}>
            <CatList />
        </div>
    )
}

export default memo(MainPage)
