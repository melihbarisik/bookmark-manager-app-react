"use client"

import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { closeModal } from '../store/slices/modalSlice';
import { ActionModal } from "./ActionModal/ActionModal";
import styles from './ModalManager.module.scss';



export const ModalManager = () => {
    const { type, data } = useAppSelector((state) => state.modalSlice);
    const dispatch = useAppDispatch();

    if (!type) return null;

    const handleBackdropClick = () => {
        dispatch(closeModal());
    };

    return (
        <div className={styles.overlay} onClick={handleBackdropClick}>
            {/* StopPropagation: İçerdeki modal içeriğine tıklandığında 
                overlay'in tıklanma olayını (kapatma işlemini) tetiklemesini engeller.
            */}
            <div onClick={(e) => e.stopPropagation()}>
                {type === 'CONFIRM_ACTION' && <ActionModal data={data} />}
                {type === 'ADD_BOOKMARK' && <div/>}
            </div>
        </div>
    );
};