import { memo } from 'react'

import { useSelector } from 'react-redux'

import { getLikedCats, CatList } from '@/entities/Cat'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

import cls from './FavoritesPage.module.scss'

interface FavoritesPageProps {
    className?: string
}

const FavoritesPage = (props: FavoritesPageProps) => {
    const { className } = props
    const likedCats = useSelector(getLikedCats)

    let content

    if (likedCats.length) {
        content = <CatList catList={likedCats} />
    } else {
        content = (
            <Text
                title="К сожалению вы не выбрали не одного котика :("
                className={cls.noCats}
            />
        )
    }

    return (
        <Page className={classNames(cls.favoritesPage, {}, [className])}>
            {content}
        </Page>
    )
}

export default memo(FavoritesPage)
