import { memo, useCallback } from 'react'

import { useSelector } from 'react-redux'

import { CatList } from '@/entities/Cat'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

import cls from './FavoritesPage.module.scss'
import { useGetFavoritesPage } from '../../api/favoritesPageApi'
import {
    getFavoritePageHasMore,
    getFavoritePageNum,
} from '../../model/selectors/getFavoritePageSelectors'
import { favoritePageActions } from '../../model/slice/favoritePageSlice'

interface FavoritesPageProps {
    className?: string
}

const FavoritesPage = (props: FavoritesPageProps) => {
    const { className } = props

    const dispatch = useAppDispatch()
    const currentPage = useSelector(getFavoritePageNum)
    const hasMore = useSelector(getFavoritePageHasMore)

    const { data: rtkCatList, isLoading } = useGetFavoritesPage({
        page: currentPage,
    })

    const onLoadNextPart = useCallback(() => {
        if (hasMore && !isLoading) {
            dispatch(favoritePageActions.setPage(currentPage + 1))
        }
    }, [currentPage, dispatch, hasMore, isLoading])

    let content

    if (rtkCatList && rtkCatList.length) {
        content = (
            <CatList
                catList={rtkCatList}
                isLoading={isLoading}
                className={cls.catList}
                onScrollEnd={onLoadNextPart}
                virtualize
            />
        )
    }
    if (!rtkCatList?.length && !isLoading) {
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
