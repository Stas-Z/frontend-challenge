import { memo, useEffect, useState } from 'react'

import { CatItem, ICat } from '@/entities/Cat'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/Stack'

import { fetchCatList } from '../../model/services/fetchCatList'

interface CatListProps {
    className?: string
}

export const CatList = memo((props: CatListProps) => {
    const { className } = props

    const [cats, setCats] = useState<ICat[]>([])

    useEffect(() => {
        const loadCats = async () => {
            try {
                const data = await fetchCatList({ limit: 35, page: 1 })
                setCats(data)
            } catch (err: any) {
                console.log('Ошибка загрузки')
            }
        }

        loadCats()
    }, [])

    return (
        <HStack
            wrap="wrap"
            gap="48"
            className={classNames('', {}, [className])}
        >
            {cats.map((cat) => (
                <CatItem cat={cat} key={cat.id} />
            ))}
        </HStack>
    )
})
