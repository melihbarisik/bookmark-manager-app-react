import { Bookmark, bookmarks } from '@/data';
import styles from './bookMarks.module.scss'
import Card from '@/components/Card/Card';

interface BookMarksProps {
    data: Bookmark[];
}

export default function Bookmarks({ data }: BookMarksProps) {

    return <div className={styles.container}>
        {data.map((bookmark, index) => (
            <Card key={index} data={bookmark}></Card>
        ))}
    </div>;
}