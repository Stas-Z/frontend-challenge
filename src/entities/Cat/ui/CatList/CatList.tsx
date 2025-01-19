import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

import cls from './CatList.module.scss'
import { useCatListSkeletons } from '../../model/lib/useCatListSkeletons/useCatListSkeleton'
import { ICat } from '../../model/types/cat'
import { CatItem } from '../CatItem/CatItem'

interface CatListProps {
    className?: string
    catList: ICat[]
    isLoading?: boolean
}

export const CatList = memo((props: CatListProps) => {
    const { className, catList, isLoading } = props

    const getCatSkeletons = useCatListSkeletons({})

    return (
        <HStack
            wrap="wrap"
            gap="48"
            className={classNames('', {}, [className])}
        >
            {catList.map((cat) => (
                <CatItem cat={cat} key={cat.id} />
            ))}

            {isLoading && !!catList.length && (
                <Text
                    text="... загружаем еще котиков ..."
                    className={cls.text}
                    style={{ width: '100%' }}
                />
            )}
            {isLoading && getCatSkeletons}
        </HStack>
    )
})
