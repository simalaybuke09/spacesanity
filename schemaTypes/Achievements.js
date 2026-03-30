export default {
    name: 'achievement',
    title: 'Başarılar',
    type: 'document',
    fields: [
        { name: 'title', title: 'Başlık (Örn: TEKNOFEST 2023)', type: 'string' },
        { name: 'award', title: 'Ödül (Örn: Türkiye Birinciliği)', type: 'string' },
        { name: 'teamName', title: 'Takım Adı', type: 'string' },
        {
            name: 'image',
            title: 'Başarı Fotoğrafı',
            type: 'image',
            options: { hotspot: true }
        },
        { name: 'year', title: 'Yıl', type: 'string' },
        { name: 'description', title: 'Kısa Açıklama', type: 'text' },
        { name: 'order', title: 'Sıralama (Örn: 1 en üstte)', type: 'number' },
    ]
}