export default {
    name: 'homePage',
    title: 'Anasayfa İçerikleri',
    type: 'document',
    fields: [

        {
            name: 'heroImage',
            title: 'Hero Arka Plan Fotoğrafı (Uzay BG)',
            type: 'image',
            options: { hotspot: true } // Fotoğrafın odak noktasını seçebilmek için önemli
        },
        
        // Hakkımızda
        { name: 'aboutText', title: 'Hakkımızda Paragrafı', type: 'text' },
        {
            name: 'aboutImages',
            title: 'Hakkımızda Slider Görselleri',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        },
        // Neler Yapıyoruz
        { name: 'whatWeDoText', title: 'Neler Yapıyoruz Paragrafı', type: 'text' },
        {
            name: 'whatWeDoImages',
            title: 'Neler Yapıyoruz Slider Görselleri',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        },
        // Rakamlar (Sadece sayıları düzenlemek için)
        { name: 'activeTeamCount', title: 'Aktif Takım Sayısı', type: 'number' },
        { name: 'activeMemberCount', title: 'Aktif Üye Sayısı', type: 'number' },
        { name: 'achievementCount', title: 'Başarı Sayısı', type: 'number' },
    ]
}