import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'

import cls from './NavbarItem.module.scss'
import { NavbarItemType } from '../../model/types/navbar'

interface NavbarItemProps {
    item: NavbarItemType
}

export const NavbarItem = memo((props: NavbarItemProps) => {
    const { item } = props

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.navbarItem, {})}
            activeClassName={cls.active}
        >
            <span className={cls.link}>{item.text}</span>
        </AppLink>
    )
})
