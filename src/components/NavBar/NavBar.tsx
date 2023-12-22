import { LogoImage } from '@/toolbox/assets/images'
import { AppBar, Avatar, Stack, Typography } from '@mui/material'
import { FC } from 'react'

interface INavBarProps {}

export const NavBar: FC<INavBarProps> = () => {
    return (
        <AppBar position='sticky' color='default'>
            <Stack
                padding='10px 20px'
                flexDirection='row'
                justifyContent='space-between'
            >
                <Stack width={200} height={50}>
                    <img src={LogoImage} alt='logo' />
                </Stack>
                <Stack flexDirection='row' gap='10px' alignItems='center'>
                    <Typography color='#0062AA' fontWeight={700}>
                        Administrador
                    </Typography>
                    <Avatar />
                </Stack>
            </Stack>
        </AppBar>
    )
}
