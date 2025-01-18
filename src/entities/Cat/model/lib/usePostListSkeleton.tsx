import { useMemo } from 'react'

import { Skeleton } from '@/shared/ui/Skeleton'

interface UsePostListSkeletonProps {
    classname?: string
}

export const usePostListSkeletons = (props: UsePostListSkeletonProps) => {
    const { classname } = props

    const postSkeletons = useMemo(() => new Array(15).fill(null), [])

    return useMemo(
        () =>
            postSkeletons.map((item, index) => (
                <Skeleton
                    className={classname}
                    height={225}
                    width={225}
                    // eslint-disable-next-line
                    key={index}
                />
            )),
        [postSkeletons, classname],
    )
}
