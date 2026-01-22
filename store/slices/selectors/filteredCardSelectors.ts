import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../index'; 


const selectAllCards = (state: RootState) => state.products.items;
const selectAllTags = (state: RootState) => state.tagFilter.items;


export const selectFilteredCards = createSelector(
    [selectAllCards, selectAllTags],
    (cards, tags) => {

        const activeTagLabels = tags
            .filter((tag) => tag.checked)
            .map((tag) => tag.label);

        // Eğer hiçbir tag seçili değilse, tüm kartları göster
        if (activeTagLabels.length === 0) {
            return cards;
        }

        // Kartın içindeki 'tags' dizisi ile seçili tagleri kıyasla
        return cards.filter((card) =>
            card.tags.some((tag: string) => activeTagLabels.includes(tag))
        );
    }
);