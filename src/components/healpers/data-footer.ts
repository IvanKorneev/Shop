interface Footer {
    id: number
    label: string
    value: string[]
}

export const dataFooter:Footer[] = [
    {
        id: 1,
        label: 'All products',
        value: ['Phones', 'Watch', 'Tablet', 'Laptop'],
    },
    {
        id: 2,
        label: 'Company',
        value: ['About', 'Support'],
    },
    {
        id: 3,
        label: 'Support',
        value: ['Style Guide', 'Licensing', 'Change Log', 'Contact']
    },
    {
        id: 4,
        label: 'Follow Us',
        value: ['Instagram', 'Linkedin', 'Twitter']
    }
];