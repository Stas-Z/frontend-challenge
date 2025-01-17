import { memo, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { CatItem } from '@/entities/Cat'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { HStack } from '@/shared/ui/Stack'

import { fetchCatList } from '../../model/services/fetchCatList'
import { getCatList } from '../../model/slice/catListSlice'

interface CatListProps {
    className?: string
}

export const CatList = memo((props: CatListProps) => {
    const { className } = props
    const dispatch = useAppDispatch()

    const catList = useSelector(getCatList.selectAll)

    useEffect(() => {
        dispatch(fetchCatList())
    }, [dispatch])

    return (
        <HStack
            wrap="wrap"
            gap="48"
            className={classNames('', {}, [className])}
        >
            {catList.map((cat) => (
                <CatItem cat={cat} key={cat.id} />
            ))}
        </HStack>
    )
})
