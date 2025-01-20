import { ReactNode } from 'react'

import { VirtuosoGrid } from 'react-virtuoso'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Virtualize.module.scss'

interface VirtualizeProps<T> {
    className?: string
    data: T[]
    renderNode: (index: number, item: T) => ReactNode
    onScrollEnd?: () => void
}

export const Virtualize = <T,>(props: VirtualizeProps<T>) => {
    const { className, data, renderNode, onScrollEnd } = props

    return (
        <VirtuosoGrid
            className={classNames(cls.virtualize, {}, [className])}
            data={data}
            itemContent={(index, item) => renderNode(index, item)}
            endReached={onScrollEnd}
            increaseViewportBy={{ top: 200, bottom: 400 }}
            listClassName={cls.itemsGridWrapper}
            useWindowScroll
        />
    )
}
