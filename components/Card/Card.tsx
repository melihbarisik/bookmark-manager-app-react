import { Bookmark } from '@/data';
import styles from './Card.module.scss'
import Image from 'next/image';
import Badge from '../Badge/Badge';
import { formatShortDate } from '@/utils/formatDate';
import Select from '../Select/Select';
import { toast } from 'sonner';
import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/slices/modalSlice';
import { getCardOptions } from '@/mocks/cardOptions';

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
    const dispatch = useAppDispatch();


    const handleCardOptions = (val: any) => {
        if (val === "pin") {
            dispatch(openModal({
                type: 'CONFIRM_ACTION',
                data: {
                    id: data.id,
                    mode: 'pin',
                    title: data.title
                }
            }))
        } else if (val === "copy") {
            if (data.url) {
                navigator.clipboard.writeText(data.url)
                    .then(() => {
                        toast.message("✔️ Link kopyalandı", {
                            description: "URL panoya başarıyla eklendi."
                        });
                    })
                    .catch((err) => {
                        console.error("Kopyalama sırasında hata oluştu: ", err);
                    });
            }

        } else if (val === "archive") {
            dispatch(openModal({
                type: 'CONFIRM_ACTION',
                data: {
                    id: data.id,
                    mode: 'archive',
                    title: data.title
                }
            }))
        } else if (val === "unarchive") {
            dispatch(openModal({
                type: 'CONFIRM_ACTION',
                data: {
                    id: data.id,
                    mode: 'unarchive',
                    title: data.title
                }
            }))
        } else if (val === "delete") {
            dispatch(openModal({
                type: 'CONFIRM_ACTION',
                data: {
                    id: data.id,
                    mode: 'delete',
                    title: data.title
                }
            }))
        } else if (val === "pin") {
             dispatch(openModal({
                type: 'CONFIRM_ACTION',
                data: {
                    id: data.id,
                    mode: 'pin',
                    title: data.title
                }
            }))
        } else if (val === "unpin") {
             dispatch(openModal({
                type: 'CONFIRM_ACTION',
                data: {
                    id: data.id,
                    mode: 'unpin',
                    title: data.title
                }
            }))
        }
    }

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
                    <div>
                        <Select
                            icon={
                                <Image
                                    src="/images/icon-menu-bookmark.svg"
                                    alt="menu-bookmark"
                                    width={20}
                                    height={20}
                                />
                            }
                            options={getCardOptions(data)}
                            onChange={handleCardOptions}
                            value=""
                        />
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

                <div>
                    {data.isArchived ? <Badge text="Archived"></Badge> : 
                    data.pinned ? <Image src="/images/icon-pin.svg" alt="" width={12} height={12} /> : <Image src="/images/icon-unpin.svg" alt="" width={12} height={12} />}
                </div>
            </div>
        </div>
    );
}