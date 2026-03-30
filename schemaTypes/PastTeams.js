export default {
    name: 'pastteams',
    type: 'document',
    title: 'Geçmiş Takımlar',
    fields: [
        { name: 'name', type: 'string', title: 'Takım Adı' },
        {
            name: 'logo',
            type: 'image',
            title: 'Takım Logosu',
            options: { hotspot: true }
        },
        { name: 'competition', type: 'string', title: 'Yarışma Adı' },
        { name: 'captain', type: 'string', title: 'Eski Takım Kaptanı' },
        { name: 'period', type: 'string', title: 'Dönem (Örn: 2021 - 2023)' },
        { name: 'description', type: 'text', title: 'Hakkında' },
        {
            name: 'archiveImages',
            type: 'array',
            title: 'Takım Arşivi (Fotoğraflar)',
            of: [{ type: 'image', options: { hotspot: true } }]
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug (ID)',
            options: { source: 'name', maxLength: 96 }
        },
    ]
}