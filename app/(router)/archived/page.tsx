"use client"

import Button from '@/components/Button/Botton';
import SortIcon from '@/icons/SortIcon';
import Bookmarks from '@/pages/bookMarks/bookMarks';
import { useState } from 'react';
import styles from './Archived.module.scss'
import { useSelector } from 'react-redux';
import { Bookmark } from '@/data';

export default function Archived() {
    const [sortType, setSortType] = useState<"asc" | "desc">("asc");
    const products = useSelector((state: any) => state.products.items.filter((item: Bookmark) => item.isArchived === true));
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
                <Bookmarks sort={sortType} data={products} ></Bookmarks>
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