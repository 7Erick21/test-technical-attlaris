export interface IHeaderTable {
    label: string
}

export const headerTable: IHeaderTable[] = [
    { label: 'ID' },
    { label: 'Nombre' },
    { label: 'Sub Tipo Examen' },
    { label: 'Estado' },
    { label: '' },
]

export interface IBodyTable {
    id: number
    name: string
    sub_type: string
    status: string
}

export const bodyTable: IBodyTable[] = [
    {
        id: 1,
        name: 'Arzobispo Loayza',
        sub_type: 'Estudios de Hospital',
        status: 'Activo',
    },
    {
        id: 2,
        name: 'Dos de Mayo',
        sub_type: 'Estudios de Hospital',
        status: 'Desactivo',
    },
    {
        id: 3,
        name: 'Docente Madre-Niño "San Bartolomé',
        sub_type: 'Estudios de Hospital',
        status: 'Activo',
    },
    {
        id: 4,
        name: 'Santa Rosa',
        sub_type: 'Estudios de Hospital',
        status: 'Activo',
    },
    {
        id: 5,
        name: 'Carlos Lanfranco La Hoz',
        sub_type: 'Estudios de Hospital',
        status: 'Activo',
    },
    {
        id: 5,
        name: 'Vitarte',
        sub_type: 'Estudios de Hospital',
        status: 'Desactivo',
    },
    {
        id: 7,
        name: 'Regional',
        sub_type: 'Estudios de Hospital',
        status: 'Activo',
    },
    {
        id: 8,
        name: 'Eco Partes',
        sub_type: 'Estudios de Hospital',
        status: 'Desactivo',
    },
    {
        id: 9,
        name: 'Posta Medica',
        sub_type: 'Estudios de Hospital',
        status: 'Activo',
    },
    {
        id: 10,
        name: 'Hospital del Callao',
        sub_type: 'Estudios de Hospital',
        status: 'Activo',
    },
]
