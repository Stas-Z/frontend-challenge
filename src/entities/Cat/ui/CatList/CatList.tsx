import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/Stack'

import { ICat } from '../../model/types/cat'
import { CatItem } from '../CatItem/CatItem'

interface CatListProps {
    className?: string
    catList: ICat[]
}

export const CatList = memo((props: CatListProps) => {
    const { className, catList } = props

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
