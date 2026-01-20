import { bookmarks } from '@/data';
import styles from './bookMarks.module.scss'
import Card from '@/components/Card/Card';


export default function Bookmarks() {
    return <div className={styles.container}>
        {bookmarks.map((bookmark, index) => (
            <Card key={index} data={bookmark}></Card>
        ))}
    </div>;
}