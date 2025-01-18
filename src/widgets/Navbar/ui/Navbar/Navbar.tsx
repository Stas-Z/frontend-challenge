import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/Stack'

import cls from './Navbar.module.scss'
import { useNavbarItems } from '../../model/selectors/getNavbarItems'
import { NavbarItem } from '../NavbarItem/NavbarItem'

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props

    const navbarItemsList = useNavbarItems()

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.wrapper}>
                <HStack wrap="wrap" max maxHeight>
                    {navbarItemsList.map((item) => (
                        <NavbarItem item={item} key={item.id} />
                    ))}
                </HStack>
            </div>
        </header>
    )
})
