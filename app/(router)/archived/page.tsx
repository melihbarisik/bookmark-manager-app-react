"use client"

import Bookmarks from '@/pages/bookMarks/bookMarks';
import { useState } from 'react';
import styles from './Archived.module.scss'
import { useSelector } from 'react-redux';
import { Bookmark } from '@/data';
import Select from '@/components/Select/Select';
import { options } from '@/mocks/types';
import Image from 'next/image';

export default function Archived() {
    const [sortValue, setSortValue] = useState("");
    const products = useSelector((state: any) => state.products.items.filter((item: Bookmark) => item.isArchived === true));

    const handleOnClick = (val: string) => {
        setSortValue(val);
    }
    return (
        <div className={styles.homeWrapper}>
            <div className={styles.headerContainer}>
                <span className={styles.header}>Archieved Bookmarks</span>
                <Select
                    label='Sort By'
                    options={options}
                    value={sortValue}
                    onChange={(val) => handleOnClick(val)}
                    icon={
                        <Image
                            src="/images/icon-sort.svg"
                            alt='search-icon'
                            width={20}
                            height={20}
                        />
                    }
                />
            </div>
            <div>
                <Bookmarks sort={sortValue} data={products} />
            </div>
        </div>
    );
}