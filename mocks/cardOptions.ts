import { Bookmark } from "@/data";


export const getCardOptions = (data: Bookmark) => {
    const options = [
        { label: "Visit", value: "visit", url: "/images/icon-visit.svg" },
        { label: "Copy URL", value: "copy", url: "/images/icon-copy.svg" },
    ];

    if (!data.isArchived && data.pinned) {
        options.push({ label: "Unpin", value: "unpin", url: "/images/icon-pin.svg" });
    } else if(!data.isArchived) {
        options.push({ label: "Pin", value: "pin", url: "/images/icon-pin.svg" });
    }

    if (data.isArchived) {
        options.push({ label: "Unarchive", value: "unarchive", url: "/images/icon-unarchive.svg" });
        options.push({ label: "Delete", value: "delete", url: "/images/icon-delete.svg" });
    } else {
        options.push({ label: "Edit", value: "edit", url: "/images/icon-edit.svg" });
        options.push({ label: "Archive", value: "archive", url: "/images/icon-archive.svg" });
    }

    return options;
};