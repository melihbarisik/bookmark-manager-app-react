import { Bookmark, bookmarks } from '@/data';
import styles from './bookMarks.module.scss'
import Card from '@/components/Card/Card';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { togglePinned } from '@/store/slices/productSlice';
import { useDispatch } from 'react-redux';
import { compareItems } from '@/utils/sort';

interface BookMarksProps {
    data: Bookmark[];
}

export default function Bookmarks({ data }: BookMarksProps) {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const dispatch = useDispatch();


    const filteredData = useMemo(() => {
        const q = query.toLowerCase();

        return data
            .filter(item => item.title.toLowerCase().includes(q))
    }, [query, data]);

    const handlePinCard = (card: Bookmark) => {
        dispatch(togglePinned(card.id));
    };

    return <div className={styles.container}>
        {filteredData.map((bookmark, index) => (
            <Card key={index} data={bookmark} onClick={(card) => handlePinCard(card)}></Card>
        ))}
    </div>;
}