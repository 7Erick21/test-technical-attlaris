export interface IItemMenu {
    label: string
}

export interface IListMenu {
    label: string
    options?: IItemMenu[]
}

export const listMenu: IListMenu[] = [
    {
        label: 'Gestion de Equipos',
        options: [
            {
                label: 'Consumibles',
            },
            {
                label: 'Salas',
            },
            {
                label: 'Modelo',
            },
            {
                label: 'Tipo de Equipo Radiologicos',
            },
            {
                label: 'Fabricante',
            },
            {
                label: 'Modalidades',
            },
        ],
    },
    { label: 'Gestion de Estudios' },
    { label: 'Personal Asistencial' },
    { label: 'Configuraciones Generales' },
]
