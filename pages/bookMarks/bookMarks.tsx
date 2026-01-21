import { Bookmark, bookmarks } from '@/data';
import styles from './bookMarks.module.scss'
import Card from '@/components/Card/Card';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { togglePinned } from '@/store/productSlice';
import { useDispatch } from 'react-redux';

interface BookMarksProps {
    sort: "asc" | "desc";
    data: Bookmark[];
}

export default function Bookmarks({ sort, data }: BookMarksProps) {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const dispatch = useDispatch();


    const filteredData = useMemo(() => {
        const q = query.toLowerCase();

        return data
            .filter(item => item.title.toLowerCase().includes(q))
            .toSorted((a, b) => {
                if (a.pinned !== b.pinned) {
                    return a.pinned ? -1 : 1;
                }

                if (sort === "asc") {
                    return a.title.localeCompare(b.title);
                } else {
                    return b.title.localeCompare(a.title);
                }
            });
    }, [query, sort, data]);

    const handlePinCard = (card: Bookmark) => {
        dispatch(togglePinned(card.id));
    };

    return <div className={styles.container}>
        {filteredData.map((bookmark, index) => (
            <Card key={index} data={bookmark} onClick={(card) => handlePinCard(card)}></Card>
        ))}
    </div>;
}