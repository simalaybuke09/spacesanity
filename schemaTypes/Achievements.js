export default {
    name: 'achievement',
    title: 'Başarılar',
    type: 'document',
    fields: [
        { name: 'title', title: 'Başlık (Örn: TEKNOFEST 2023)', type: 'string' },
        { name: 'award', title: 'Ödül (Örn: Türkiye Birinciliği)', type: 'string' },

        // DEĞİŞİKLİK BURADA: 
        // Takım Adını elle yazmak yerine Arşivdeki takımlardan seçiyoruz.
        {
            name: 'team',
            title: 'İlgili Takım (Arşiv Bağlantısı)',
            type: 'reference',
            to: [{ type: 'pastteams' }], // Bu isim Arşiv sayfanın Sanity'deki 'name' değeriyle aynı olmalı
            description: 'Bu başarıyı kazanan takımı arşivden seçin.'
        },

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