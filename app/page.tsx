"use client"


import styles from './page.module.scss'
import Bookmarks from '@/pages/bookMarks/bookMarks';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from '../components/Select/Select';
import Image from 'next/image';
import { options } from '@/mocks/types';
import { selectFilteredCards } from '@/store/slices/selectors/filteredCardSelectors';
import { setSortBy } from '@/store/slices/productSlice';




export default function Home() {
  const [sortValue] = useState("");
  const dispatch = useDispatch();
  const cards = useSelector(selectFilteredCards);
  const handleOnClick = (val: string) => {
    dispatch(setSortBy(val))
  }

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.headerContainer}>
        <span className={styles.header}>All Bookmarks</span>
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
        <Bookmarks data={cards} />
      </div>
    </div>
  );
}
