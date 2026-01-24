import { createSelector } from "@reduxjs/toolkit";
import { selectFilteredCards } from "./filteredCardSelectors";


export const selectActiveBookmarks = createSelector(
    [selectFilteredCards],
    (bookmarks) => bookmarks.filter(b => !b.isArchived)
);