export const compareItems = (a: any, b: any, sortType: string) => {
  switch (sortType) {
    case "radded": // Recently Added (En yeni eklenen en üstte)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

    case "rvisited": // Recently Visited (En son ziyaret edilen en üstte)
      // lastVisited null gelirse en sona atması için || 0 ekledik
      return new Date(b.lastVisited || 0).getTime() - new Date(a.lastVisited || 0).getTime();

    case "mvisited": // Most Visited (En çok ziyaret edilen en üstte)
      return (b.visitCount || 0) - (a.visitCount || 0);

    default: // Varsayılan (Bir şey seçilmezse)
      return 0;
  }
};