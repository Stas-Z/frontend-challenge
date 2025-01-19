import { memo, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { CatList } from '@/entities/Cat'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

import cls from './FavoritesPage.module.scss'
import { getFavoritePageIsLoading } from '../../model/selectors/getFavoritePageSelectors'
import { fetchNextCatsPage } from '../../model/services/fetchNextCatsPage/fetchNextCatsPage'
import { initFavoriteCatsPage } from '../../model/services/initFavoriteCatsPage/initFavoriteCatsPage'
import { getFavoriteList } from '../../model/slice/favoritePageSlice'

interface FavoritesPageProps {
    className?: string
}

const FavoritesPage = (props: FavoritesPageProps) => {
    const { className } = props

    const dispatch = useAppDispatch()

    const catList = useSelector(getFavoriteList.selectAll)

    const isLoading = useSelector(getFavoritePageIsLoading)

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextCatsPage())
    }, [dispatch])

    useEffect(() => {
        dispatch(initFavoriteCatsPage())
    }, [dispatch])

    let content

    if (catList.length) {
        content = (
            <CatList
                catList={catList}
                isLoading={isLoading}
                className={cls.catList}
            />
        )
    }
    if (!catList.length && !isLoading) {
        content = (
            <Text
                title="К сожалению вы не выбрали не одного котика :("
                className={cls.noCats}
            />
        )
    }

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.favoritesPage, {}, [className])}
        >
            {content}
        </Page>
    )
}

export default memo(FavoritesPage)
