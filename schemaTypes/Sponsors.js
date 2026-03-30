export default {
    name: 'sponsor',
    title: 'Sponsorlar',
    type: 'document',
    fields: [
        { name: 'name', title: 'Sponsor Adı', type: 'string' },
        {
            name: 'logo',
            title: 'Sponsor Logosu',
            type: 'image',
            options: { hotspot: true }
        },
        { name: 'url', title: 'Web Sitesi Linki', type: 'url' },
        {
            name: 'tier',
            title: 'Sponsorluk Seviyesi',
            type: 'string',
            options: {
                list: [
                    { title: 'Ana Sponsor', value: 'ana' },
                    { title: 'Altın Sponsor', value: 'altin' },
                    { title: 'Gümüş Sponsor', value: 'gumus' },
                    { title: 'Destekçi / Diğer', value: 'diger' },
                ],
            },
            initialValue: 'altin'
        },
        { name: 'order', title: 'Sıralama', type: 'number' },
    ]
}