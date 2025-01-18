import { ReactNode, Ref, forwardRef, memo } from 'react'

import { LinkProps, NavLink } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './AppLink.module.scss'

export type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariant
    children?: ReactNode
    activeClassName?: string
}

const AppLink = forwardRef(
    (props: AppLinkProps, ref: Ref<HTMLAnchorElement>) => {
        const {
            to,
            className,
            children,
            variant = 'primary',
            activeClassName = '',
            ...otherProps
        } = props

        return (
            <NavLink
                ref={ref}
                to={to}
                className={({ isActive }) =>
                    classNames(cls.appLink, { [activeClassName]: isActive }, [
                        className,
                        cls[variant],
                    ])
                }
                {...otherProps}
            >
                {children}
            </NavLink>
        )
    },
)
export default memo(AppLink)
