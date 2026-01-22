"use client"


import styles from './page.module.scss'
import Bookmarks from '@/pages/bookMarks/bookMarks';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from '../components/Select/Select';
import Image from 'next/image';
import { options } from '@/mocks/types';




export default function Home() {
  const [sortValue, setSortValue] = useState("");
  const products = useSelector((state: any) => state.products.items);
  const handleOnClick = (val: string) => {
    setSortValue(val);
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
        <Bookmarks sort={sortValue} data={products} />
      </div>
    </div>
  );
}
