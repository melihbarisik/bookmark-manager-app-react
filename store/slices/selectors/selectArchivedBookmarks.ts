import { createSelector } from "@reduxjs/toolkit";
import { selectFilteredCards } from "./filteredCardSelectors";


export const selectArchivedBookmarks = createSelector(
    [selectFilteredCards],
    (bookmarks) => bookmarks.filter(b => b.isArchived)
);