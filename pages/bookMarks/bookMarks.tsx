import { Bookmark, bookmarks } from '@/data';
import styles from './bookMarks.module.scss'
import Card from '@/components/Card/Card';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

interface BookMarksProps {
    sort: "asc" | "desc";
    type: "all" | "archived";
}

export default function Bookmarks({ sort, type }: BookMarksProps) {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const [data, setData] = useState(type === "archived" ? bookmarks.filter((item: Bookmark) => item.pinned === true) : bookmarks);

    const filteredData = useMemo(() => {
        const q = query.toLowerCase();

        return data
            .filter(item => item.title.toLowerCase().includes(q))
            .toSorted((a, b) => {
                if (sort === "asc") {
                    return a.title.localeCompare(b.title);
                }
                return b.title.localeCompare(a.title);
            });
    }, [query, sort, data]);

    const handlePinCard = (card: Bookmark) => {
        setData((prev: Bookmark[]) =>
            prev.map((item: Bookmark) =>
                item.id === card.id
                    ? { ...item, pinned: !item.pinned }
                    : item
            )
        );
    };

    return <div className={styles.container}>
        {filteredData.map((bookmark, index) => (
            <Card key={index} data={bookmark} onClick={(card) => handlePinCard(card)}></Card>
        ))}
    </div>;
}