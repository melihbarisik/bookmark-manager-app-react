import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeModal } from "@/store/slices/modalSlice"; // Modal kapatma aksiyonun
import { toast } from "sonner";
import styles from './Action.module.scss';
import Button from "@/components/Button/Botton";
import Image from "next/image";
import { useSelector } from "react-redux";
import { deleteById, toggleArchive, togglePinned } from "@/store/slices/productSlice";


export const ActionModal = ({ data }: { data: { id: string, mode: 'archive' | "unarchive" | "pin" | "unpin" | "delete" } }) => {
    const dispatch = useAppDispatch();
    const cards = useSelector((state: any) => state.products.items);

    const configs = {
        archive: {
            title: 'Archive Bookmark',
            desc: 'Are you sure you want to archive this bookmark?',
            confirmText: 'Archive'
        },
        unarchive: {
            title: 'Unarchive Bookmark',
            desc: 'This will move the card back to your main list.',
            confirmText: 'Unarchive'
        },
        pin: {
            title: 'Pin Bookmark',
            desc: 'This will pin the card above the main list.',
            confirmText: 'Pin'
        },
        unpin: {
            title: 'Pin Bookmark',
            desc: 'This will unpin the card from the main list.',
            confirmText: 'Unpin'
        },
        delete: {
            title: 'Delete Permanently',
            desc: 'This action cannot be undone. Are you sure?',
            confirmText: 'Delete Permanently'
        }
    };

    const current = configs[data.mode];

    const handleConfirm = () => {
        if (data.mode === 'archive' || data.mode === 'unarchive') {
            dispatch(toggleArchive(data.id));
        } else if (data.mode === 'delete') {
            dispatch(deleteById(data.id))
        } else if (data.mode === "pin" || data.mode === "unpin") {
            dispatch(togglePinned(data.id))
        }

        dispatch(closeModal());
    };

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
                <div className={styles.closeIcon}>
                    <Image
                        onClick={() => dispatch(closeModal())}
                        src="/images/icon-close.svg"
                        alt="close-icon"
                        width={20}
                        height={20} />
                </div>
                <h2 className={styles.title}>{current.title}</h2>
                <p className={styles.description}>{current.desc}</p>
            </div>

            <div className={`${styles.modalFooter}`}>
                <Button
                    className={`${styles.cancelBtn}  ${styles.footerBtn}`}
                    onClick={() => dispatch(closeModal())}
                >
                    Cancel
                </Button>
                <Button
                    className={`${data.mode === "delete" ? styles.deleteBtn : styles.confirmBtn} ${styles.footerBtn}`}
                    onClick={handleConfirm}
                >
                    {current.confirmText}
                </Button>
            </div>
        </div>
    );
};