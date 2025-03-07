import React, { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './Icon.module.scss'

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
    className?: string
    Svg: React.FC<React.SVGProps<SVGSVGElement>> | null
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false
}

interface ClickableIconProps extends IconBaseProps {
    clickable?: true
    onClick: () => void
}

type IconProps = NonClickableIconProps | ClickableIconProps

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...otherProps
    } = props

    const additionalClass = clickable ? undefined : className

    if (Svg === null) {
        return
    }

    const icon = (
        <Svg
            className={classNames(cls.icon, {}, [additionalClass])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    )

    if (clickable) {
        return (
            <button
                type="button"
                className={classNames(cls.button, {}, [className])}
                onClick={props.onClick}
                style={{ height, width }}
            >
                {icon}
            </button>
        )
    }

    return icon
})
