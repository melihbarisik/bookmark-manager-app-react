import { Bookmark } from '@/data';
import styles from './Card.module.scss'
import Image from 'next/image';
import Divider from '../Divider/Divider';
import Badge from '../Badge/Badge';
import { formatShortDate } from '@/utils/formatDate';

export interface CardData {
    favicon: React.ReactNode;
    title: string;
    headerSpan: string;
    description: string;
    tags: string[];
    visitCount: string;
    createdAt: string;
    lastVisited: string;
}

interface CardProps {
    data: Bookmark;
}


export default function Card({ data }: CardProps) {
    return (
        <div className={styles.container}>
            {/* CONTENT */}
            <div className={styles.content}>
                <div className={styles.header}>
                    <Image
                        src={data.favicon}
                        alt={data.title}
                        width={44}
                        height={44}
                    />

                    <div className={styles.headerText}>
                        <span className={styles.title}>{data.title}</span>
                        <span className={styles.url}>{data.url}</span>
                    </div>
                </div>

                <div className={styles.description}>{data.description}</div>

                <div className={styles.tagsContainer}>
                    {data.tags.map(tag => (
                        <Badge key={tag} text={tag} />
                    ))}
                </div>
            </div>

            {/* FOOTER */}
            <div className={styles.footer}>
                <div className={styles.footerLeft}>
                    <div className={styles.footerItem}>
                        <Image src="/images/icon-visit-count.svg" alt="" width={12} height={12} />
                        <span>{data.visitCount}</span>
                    </div>

                    <div className={styles.footerItem}>
                        <Image src="/images/icon-created.svg" alt="" width={12} height={12} />
                        <span>{formatShortDate(data.createdAt)}</span>
                    </div>

                    <div className={styles.footerItem}>
                        <Image src="/images/icon-last-visited.svg" alt="" width={12} height={12} />
                        <span>{formatShortDate(data.lastVisited)}</span>
                    </div>
                </div>

                <div className={styles.footerItem}>
                    <Image src="/images/icon-pin.svg" alt="" width={12} height={12} />
                </div>
            </div>
        </div>
    );
}