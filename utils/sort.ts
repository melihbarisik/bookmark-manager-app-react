export const compareItems = (a: any, b: any, sortType: string) => {
  // b pinli a değilse, b yukarı çıkar (-1 dönerse a öne geçer, o yüzden b - a mantığı)
  if (a.isPinned !== b.isPinned) {
    return a.isPinned ? -1 : 1;
  }

  switch (sortType) {
    case "radded": // Recently Added
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

    case "rvisited": // Recently Visited
      return new Date(b.lastVisited || 0).getTime() - new Date(a.lastVisited || 0).getTime();

    case "mvisited": // Most Visited
      return (b.visitCount || 0) - (a.visitCount || 0);

    default:
      return 0;
  }
};