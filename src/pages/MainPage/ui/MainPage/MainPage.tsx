import { memo, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { CatList } from '@/entities/Cat'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'

import { fetchCatList } from '../../model/services/fetchCatList'
import { getCatList } from '../../model/slice/catListSlice'

interface MainPageProps {
    className?: string
}

const MainPage = (props: MainPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()

    const catList = useSelector(getCatList.selectAll)

    useEffect(() => {
        if (!catList.length) {
            dispatch(fetchCatList())
        }
        // eslint-disable-next-line
    }, [dispatch])

    return (
        <Page className={classNames('', {}, [className])}>
            <CatList catList={catList} />
        </Page>
    )
}

export default memo(MainPage)
