import { Collapse, Stack, Typography, styled } from '@mui/material'
import { FC, useState } from 'react'
import { IListMenu, listMenu } from './Menu.default'
import { useNavigate } from 'react-router-dom'
import { ROUTE_MACROS } from '@/constants/routes'

interface IMenuItemProps {
    item: IListMenu
}

const TypographyStyled = styled(Typography)`
    color: black;
    cursor: pointer;
    :hover {
        opacity: 0.5;
    }
`

const MenuItem: FC<IMenuItemProps> = ({ item }) => {
    const { label, options } = item
    const navigate = useNavigate()

    const [open, setOpen] = useState<boolean>(false)

    const handleClick = () => {
        if (options) setOpen((prev) => !prev)
        else navigate(ROUTE_MACROS)
    }

    return (
        <Stack overflow='hidden'>
            <TypographyStyled onClick={handleClick} color='white'>
                {label}
            </TypographyStyled>
            <Collapse in={open}>
                {options?.map(({ label }, idx) => (
                    <Stack key={idx} paddingLeft={3}>
                        <TypographyStyled
                            color='blanchedalmond'
                            onClick={handleClick}
                        >
                            {label}
                        </TypographyStyled>
                    </Stack>
                ))}
            </Collapse>
        </Stack>
    )
}

export const Menu: FC = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    return (
        <Stack position='relative' bgcolor='#5FBDC7' borderRadius={2}>
            <Stack
                position='absolute'
                top={0}
                right='-20px'
                bgcolor='#5FBDC7'
                onClick={() => setOpenMenu((prev) => !prev)}
                style={{ cursor: 'pointer' }}
                paddingX={1}
                paddingY={0.5}
                borderRadius={2}
            >
                <Typography color='#ffffff' fontWeight={700}>
                    ...
                </Typography>
            </Stack>
            <Stack overflow='hidden' width={openMenu ? 'fit-content' : '0px'}>
                <Collapse in={openMenu}>
                    <Stack padding={1.5} overflow='hidden'>
                        {listMenu.map((item, idx) => (
                            <MenuItem item={item} key={idx} />
                        ))}
                    </Stack>
                </Collapse>
            </Stack>
        </Stack>
    )
}
