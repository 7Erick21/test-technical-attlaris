import { IBodyTable } from '@/pages/Macros/Macros.default'
import { Error } from '@mui/icons-material'
import {
    Button,
    DialogTitle,
    MenuItem,
    Dialog as MuiDialog,
    Select,
    Stack,
    TextField,
    Typography,
    styled,
} from '@mui/material'
import { Editor } from '@tinymce/tinymce-react'
import { FC, useEffect, useState } from 'react'

interface IDialog {
    open: boolean
    onClose: () => void
    variant: 'search' | 'edit'
    data: IBodyTable
    onEdit?: (data: IBodyTable) => void
}

const MuiDialogStyled = styled(MuiDialog)`
    .MuiDialog-paper {
        max-width: 900px;
    }
`

export const MDialog: FC<IDialog> = ({
    onClose,
    open,
    variant,
    data,
    onEdit,
}) => {
    const [name, setName] = useState<string>(data.name)
    const [status, setStatus] = useState<string>(data.status)
    const [type, setType] = useState<string>(data.sub_type)
    const [hideMarcadores, setHideMarcadores] = useState<boolean>(false)

    const marcadoresData = [
        {
            label: 'ees',
            content: 'Descripcion del estudio',
        },
        {
            label: 'ssp',
            content: 'Nombres y apellidos del especialista que informa',
        },
        {
            label: 'pce',
            content: 'Nombres, apellidos y edad del paciente',
        },
    ]

    useEffect(() => {
        setName(data.name)
        setStatus(data.status)
        setType(data.sub_type)
    }, [data])

    return (
        <MuiDialogStyled open={open}>
            <DialogTitle>Vizualizar Macro</DialogTitle>

            <Stack display='flex' gap={3} padding={5}>
                <Stack
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='flex-start'
                    gap={5}
                >
                    <Stack
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='flex-start'
                        gap={2}
                    >
                        <label>Titulo:</label>
                        <TextField
                            hiddenLabel
                            variant='filled'
                            size='small'
                            disabled={variant === 'search'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Stack>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => setHideMarcadores((prev) => !prev)}
                    >
                        Ver Marcadores
                    </Button>
                </Stack>
                <Stack
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='flex-start'
                    gap={5}
                >
                    <Stack
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='flex-start'
                        gap={2}
                    >
                        <label>Estado:</label>
                        <Select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            disabled={variant === 'search'}
                        >
                            <MenuItem value='Activo'>Activo</MenuItem>
                            <MenuItem value='Desactivo'>Desactivo</MenuItem>
                        </Select>
                    </Stack>
                    <Stack
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='flex-start'
                        gap={2}
                    >
                        <label>Sub Tipo Examen:</label>
                        <TextField
                            hiddenLabel
                            variant='filled'
                            size='small'
                            disabled={variant === 'search'}
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </Stack>
                </Stack>
                {hideMarcadores && (
                    <Stack display='flex' gap={4}>
                        <Stack
                            display='flex'
                            flexDirection='row'
                            gap={1}
                            alignItems='center'
                        >
                            <Error />
                            <Typography>
                                Utilice los siguientes marcadores, para indicar
                                el tipo de informacion a incluir en el marco
                            </Typography>
                        </Stack>
                        <Stack
                            display='flex'
                            gap={3}
                            flexWrap='wrap'
                            alignItems='flex-start'
                            justifyContent='center'
                            maxHeight={200}
                        >
                            {marcadoresData.map(({ label, content }, idx) => (
                                <Stack
                                    key={idx}
                                    display='flex'
                                    flexDirection='row'
                                    gap={1}
                                    alignItems='center'
                                >
                                    <Typography fontWeight={700}>
                                        {label}
                                    </Typography>
                                    <Typography
                                        whiteSpace='break-spaces'
                                        style={{
                                            wordBreak: 'break-word',
                                            hyphens: 'auto',
                                        }}
                                    >
                                        {content}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                )}
                <Stack display='flex' gap={4}>
                    <Editor
                        initialValue={''}
                        init={{
                            min_height: 400,
                            quickbars_insert_toolbar:
                                'quicktable image media codesample',
                            quickbars_selection_toolbar:
                                'bold italic underline | blocks | bullist numlist | blockquote quicklink',
                            contextmenu:
                                'undo redo | inserttable | cell row column deletetable | help',
                            powerpaste_word_import: 'clean',
                            powerpaste_html_import: 'clean',

                            plugins: [
                                'autolink',
                                'autoresize',
                                'codesample',
                                'link',
                                'lists',
                                'media',
                                'powerpaste',
                                'table',
                                'image',
                                'quickbars',
                                'codesample',
                                'help',
                            ],
                            toolbar:
                                'undo redo | blocks | bold italic | alignleft aligncentre alignright alignjustify | indent outdent | bullist numlist',
                        }}
                    />
                    <Button
                        variant='outlined'
                        color='primary'
                        onClick={onClose}
                    >
                        Volver
                    </Button>
                    {variant === 'edit' && (
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => {
                                onEdit?.({
                                    id: data.id,
                                    name,
                                    status,
                                    sub_type: type,
                                })
                                onClose()
                            }}
                        >
                            Editar
                        </Button>
                    )}
                </Stack>
            </Stack>
        </MuiDialogStyled>
    )
}
