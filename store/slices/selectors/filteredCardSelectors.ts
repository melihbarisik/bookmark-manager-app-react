import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../index';


const selectAllCards = (state: RootState) => state.products.items;
const selectSortBy = (state: RootState) => state.products.sortBy;
const selectAllTags = (state: RootState) => state.tagFilter.items;


export const selectFilteredCards = createSelector(
    [selectAllCards, selectAllTags, selectSortBy],
    (cards, tags, sortBy) => {
        // 1. Filtreleme
        const activeTagLabels = tags
            .filter((tag) => tag.checked)
            .map((tag) => tag.label);

        let filtered = activeTagLabels.length === 0
            ? [...cards]
            : cards.filter(card => card.tags.some(t => activeTagLabels.includes(t)));

        // 2. Sıralama (Sort)
        return filtered.sort((a, b) => {
            // 1. ÖNCELİK: Pinned durumu
            if (a.pinned !== b.pinned) {
                return a.pinned ? -1 : 1;
            }

            // 2. İKİNCİL: Seçili sıralama kriteri
            switch (sortBy) {
                case 'radded': {
                    // Tarihlerin string olma ihtimaline karşı güvenli dönüşüm
                    const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
                    const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
                    return timeB - timeA;
                }

                case 'rvisited': {
                    // lastVisited null ise 0 kabul ederek en sona atıyoruz
                    const timeA = a.lastVisited ? new Date(a.lastVisited).getTime() : 0;
                    const timeB = b.lastVisited ? new Date(b.lastVisited).getTime() : 0;
                    return timeB - timeA;
                }

                case 'mvisited': {
                    return (b.visitCount ?? 0) - (a.visitCount ?? 0);
                }

                default:
                    return 0;
            }
        });
    }
);