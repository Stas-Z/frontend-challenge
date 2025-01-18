import { memo, useCallback, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { CatList } from '@/entities/Cat'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'

import cls from './CatsPage.module.scss'
import { getCatsPageIsLoading } from '../../model/selectors/getCatsPageSelectors'
import { fetchNextCatsPage } from '../../model/services/fetchNextCatsPage/fetchNextCatsPage'
import { initCatsPage } from '../../model/services/initCatsPage/initCatsPage'
import { getCatList } from '../../model/slice/catsPageSlice'

interface CatsPageProps {
    className?: string
}

const CatsPage = (props: CatsPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()

    const catList = useSelector(getCatList.selectAll)
    const isLoading = useSelector(getCatsPageIsLoading)

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextCatsPage())
    }, [dispatch])

    useEffect(() => {
        dispatch(initCatsPage())
    }, [dispatch])

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames('', {}, [className])}
        >
            <CatList
                catList={catList}
                isLoading={isLoading}
                className={cls.catList}
            />
        </Page>
    )
}

export default memo(CatsPage)
