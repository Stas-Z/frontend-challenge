import { memo } from 'react'

import { CatList } from '@/features/CatList'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'

import cls from './MainPage.module.scss'

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {
    const { className } = props

    return (
        <Page className={classNames(cls.mainPage, {}, [className])}>
            <CatList />
        </Page>
    )
}

export default memo(MainPage)
