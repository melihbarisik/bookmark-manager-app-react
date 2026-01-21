"use client"

import Button from '@/components/Button/Botton';
import SortIcon from '@/icons/SortIcon';
import Bookmarks from '@/pages/bookMarks/bookMarks';
import { useState } from 'react';
import styles from './Archived.module.scss'

export default function Archived() {
    const [sortType, setSortType] = useState<"asc" | "desc">("asc");

    const handleOnClick = () => {
        if (sortType === "asc") {
            setSortType("desc");
        } else {
            setSortType("asc");
        }
    }
    return (
        <div className={styles.homeWrapper}>
            <div className={styles.headerContainer}>
                <span className={styles.header}>Archieved Bookmarks</span>
                <Button className={styles.sortButton} onClick={() => handleOnClick()}
                    icon={
                        <SortIcon />}>
                    Sort By</Button>
            </div>
            <div>
                <Bookmarks sort={sortType} type='archived'></Bookmarks>
            </div>
            <button onClick={() => {
                const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', theme);
            }}>
                Temayı Değiştir
            </button>
        </div>
    );
}