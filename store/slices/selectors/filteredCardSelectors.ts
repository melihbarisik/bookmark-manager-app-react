import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../index';


const selectAllCards = (state: RootState) => state.products.items;
const selectSortBy = (state: RootState) => state.products.sortBy;
const selectAllTags = (state: RootState) => state.tagFilter.items;
const selectSearchQuery = (state: RootState) => state.products.searchQuery


export const selectFilteredCards = createSelector(
    [selectAllCards, selectAllTags, selectSortBy, selectSearchQuery],
    (cards, tags, sortBy, searchQuery) => {

        // Adım 1: Başlangıç havuzunu belirle
        let result = cards;

        // Adım 2: Arama (Search) - Büyük/Küçük harf duyarsız
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter((card) =>
                card.title.toLowerCase().includes(lowerQuery) ||
                card.url?.toLowerCase().includes(lowerQuery) // İstersen URL içinde de aratabilirsin
            );
        }

        // Adım 3: Etiket (Tag) Filtreleme
        // Zincirleme mantığı: Önce arama sonucunu aldık (result), şimdi onu filtreliyoruz.
        const activeTagLabels = tags
            .filter((tag) => tag.checked)
            .map((tag) => tag.label);

        if (activeTagLabels.length > 0) {
            result = result.filter(card =>
                card.tags.some(t => activeTagLabels.includes(t))
            );
        }

        // Adım 4: Sıralama (Sort)
        // DİKKAT: .sort() array'i mutasyona uğratır (değiştirir).
        // Bu yüzden [...result] diyerek kopyasını alıp sıralamak en güvenlisidir.
        return [...result].sort((a, b) => {
            // 4.1. ÖNCELİK: Pinned durumu (Pinli olanlar hep en üstte)
            // true (1) > false (0) mantığıyla değil, boolean karşılaştırmasıyla:
            if (a.pinned !== b.pinned) {
                return a.pinned ? -1 : 1;
            }

            // 4.2. İKİNCİL: Seçili sıralama kriteri
            switch (sortBy) {
                case 'radded': { // Recently Added (En yeni eklenen)
                    const timeA = new Date(a.createdAt || 0).getTime();
                    const timeB = new Date(b.createdAt || 0).getTime();
                    return timeB - timeA;
                }

                case 'rvisited': { // Recently Visited
                    const timeA = new Date(a.lastVisited || 0).getTime();
                    const timeB = new Date(b.lastVisited || 0).getTime();
                    return timeB - timeA;
                }

                case 'mvisited': { // Most Visited
                    return (b.visitCount || 0) - (a.visitCount || 0);
                }

                // Varsayılan sıralama (örneğin isme göre A-Z)
                default:
                    return 0;
            }
        });
    }
);