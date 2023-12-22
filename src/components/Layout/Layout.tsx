import { Stack } from '@mui/material'
import { FC, ReactNode } from 'react'
import { NavBar } from '../NavBar'
import { Menu } from '../Menu'

interface ILayoutProps {
    children: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <Stack position='relative'>
            <NavBar />

            <Stack position='relative'>
                <Stack position='fixed' top='10%' zIndex={999}>
                    <Menu />
                </Stack>
                {children}
            </Stack>
        </Stack>
    )
}
