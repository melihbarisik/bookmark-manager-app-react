import { bookmarks } from '@/data';
import styles from './bookMarks.module.scss'
import Card from '@/components/Card/Card';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

interface BookMarksProps {
    sort: "asc" | "desc";
}

export default function Bookmarks({ sort }: BookMarksProps) {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';

    const filteredData = useMemo(() => {
        console.log("sort", sort);
        const q = query.toLowerCase();

        return bookmarks
            .filter(item => item.title.toLowerCase().includes(q))
            .toSorted((a, b) => {
                if (sort === "asc") {
                    return a.title.localeCompare(b.title);
                }
                return b.title.localeCompare(a.title);
            });
    }, [query, sort]);

    return <div className={styles.container}>
        {filteredData.map((bookmark, index) => (
            <Card key={index} data={bookmark}></Card>
        ))}
    </div>;
}