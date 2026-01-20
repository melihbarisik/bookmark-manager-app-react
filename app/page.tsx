"use client"

import Button from '@/components/Button/Botton';
import styles from './page.module.scss'
import SortIcon from '@/icons/SortIcon';
import Bookmarks from '@/pages/bookMarks/bookMarks';

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.headerContainer}>
        <span className={styles.header}>All Bookmarks</span>
        <Button className={styles.sortButton}
          icon={
            <SortIcon/>}>
          Sort By</Button>
      </div>
      <div>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}
