import { useMemo } from 'react'

import { Skeleton } from '@/shared/ui/Skeleton'

interface UseCatListSkeletonProps {
    classname?: string
}

export const useCatListSkeletons = (props: UseCatListSkeletonProps) => {
    const { classname } = props

    const catSkeletons = useMemo(() => new Array(15).fill(null), [])

    return useMemo(
        () =>
            catSkeletons.map((item, index) => (
                <Skeleton
                    className={classname}
                    height={225}
                    width={225}
                    // eslint-disable-next-line
                    key={index}
                />
            )),
        [catSkeletons, classname],
    )
}
