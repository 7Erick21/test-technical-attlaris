import { Grid, Stack, TextField, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { IBodyTable, bodyTable, headerTable } from './Macros.default'
import { Search, Edit, Close } from '@mui/icons-material'
import { MDialog } from '@/components/pages/Macros/Dialogs'

export const Macros: FC = () => {
    const [search, setSearch] = useState<string>('')
    const [dataFake, setDataFake] = useState<IBodyTable[]>(bodyTable)
    const [dataFakeModal, setDataFakeModal] = useState<IBodyTable>({
        id: 0,
        name: '',
        status: '',
        sub_type: '',
    })
    const [openModalSearch, setOpenModalSearch] = useState<boolean>(false)
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)

    return (
        <Stack display='flex' gap={4} paddingY={4} paddingX={6}>
            <Stack display='flex' flexDirection='row'>
                <TextField
                    id='outlined-basic'
                    label='Search Name'
                    variant='outlined'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Stack>
            <Stack display='flex' flexDirection='column' gap={1}>
                <Grid display='grid' gridTemplateColumns='1fr 3fr 8fr 3fr 3fr'>
                    {headerTable.map(({ label }, idx) => (
                        <Stack
                            key={idx}
                            display='flex'
                            alignItems='center'
                            justifyContent='flex-start'
                            flexDirection='row'
                        >
                            <Typography textAlign='start'>{label}</Typography>
                        </Stack>
                    ))}
                </Grid>
                <Stack display='flex' flexDirection='column'>
                    {dataFake
                        .filter((prev) => prev.name.includes(search))
                        .map(({ id, name, status, sub_type }, idx) => (
                            <Grid
                                key={idx}
                                display='grid'
                                gridTemplateColumns='1fr 3fr 8fr 3fr 3fr'
                            >
                                <Stack
                                    display='flex'
                                    alignItems='center'
                                    flexDirection='row'
                                    justifyContent='flex-start'
                                >
                                    <Typography>{id}</Typography>
                                </Stack>
                                <Stack
                                    display='flex'
                                    alignItems='center'
                                    flexDirection='row'
                                    justifyContent='flex-start'
                                >
                                    <Typography>{name}</Typography>
                                </Stack>
                                <Stack
                                    display='flex'
                                    alignItems='center'
                                    flexDirection='row'
                                    justifyContent='flex-start'
                                >
                                    <Typography>{sub_type}</Typography>
                                </Stack>
                                <Stack
                                    display='flex'
                                    alignItems='center'
                                    flexDirection='row'
                                    justifyContent='flex-start'
                                >
                                    <Typography>{status}</Typography>
                                </Stack>
                                <Stack
                                    display='flex'
                                    alignItems='center'
                                    flexDirection='row'
                                    justifyContent='flex-start'
                                    gap={1}
                                >
                                    <Search
                                        onClick={() => {
                                            setDataFakeModal({
                                                id,
                                                name,
                                                status,
                                                sub_type,
                                            })
                                            setOpenModalSearch(true)
                                        }}
                                        color='primary'
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <Edit
                                        color='primary'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setDataFakeModal({
                                                id,
                                                name,
                                                status,
                                                sub_type,
                                            })
                                            setOpenModalEdit(true)
                                        }}
                                    />
                                    <Close
                                        color='primary'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() =>
                                            setDataFake((prev) =>
                                                prev.filter(
                                                    (data) => data.id !== id,
                                                ),
                                            )
                                        }
                                    />
                                </Stack>
                            </Grid>
                        ))}
                </Stack>
            </Stack>
            <MDialog
                open={openModalSearch}
                data={dataFakeModal}
                onClose={() => setOpenModalSearch(false)}
                variant='search'
            />
            <MDialog
                open={openModalEdit}
                data={dataFakeModal}
                onClose={() => setOpenModalEdit(false)}
                variant='edit'
                onEdit={(data) => {
                    setDataFakeModal((prev) => ({
                        ...prev,
                        name: data.name,
                        status: data.status,
                        sub_type: data.sub_type,
                    }))
                    setDataFake((prev) =>
                        prev.map((prevData) => {
                            if (prevData.id === data.id) {
                                return {
                                    ...prevData,
                                    name: data.name,
                                    status: data.status,
                                    sub_type: data.sub_type,
                                }
                            } else {
                                return prevData
                            }
                        }),
                    )
                }}
            />
        </Stack>
    )
}
