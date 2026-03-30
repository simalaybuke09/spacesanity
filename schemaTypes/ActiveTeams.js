export default {
    name: 'activeteams',
    type: 'document',
    title: 'Aktif Takımlar',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Takım Adı',
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Takım Logosu',
            options: { hotspot: true }
        },
        {
            name: 'competition',
            type: 'string',
            title: 'Yarışma Adı'
        },
        {
            name: 'captain',
            type: 'string',
            title: 'Takım Kaptanı'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Hakkında'
        }
        
    ]
}