"use client"

import Bookmarks from '@/pages/bookMarks/bookMarks';
import { useState } from 'react';
import styles from './Archived.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import Select from '@/components/Select/Select';
import { options } from '@/mocks/types';
import Image from 'next/image';
import { setSortBy } from '@/store/slices/productSlice';
import { selectArchivedBookmarks } from '@/store/slices/selectors/selectArchivedBookmarks';

export default function Archived() {
    const [sortValue, setSortValue] = useState("");
    const dispatch = useDispatch();
    const products = useSelector((selectArchivedBookmarks));

    const handleOnClick = (val: string) => {
        dispatch(setSortBy(val))
        setSortValue(val)
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
                <Bookmarks data={products} />
            </div>
        </div>
    );
}