"use client"

import React from 'react';
import styles from './Navbar.module.scss';
import Search from '../Search/Search';
import Button from '../Button/Botton';
import AddIcon from '@/icons/AddIcon';
import Avatar from '../Avatar/Avatar';
import { useAppSelector } from '@/store/hooks';
import Select from '../Select/Select';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/store/slices/SidebarSlice';



const Navbar: React.FC = () => {
  const isSidebarOpen = useAppSelector(state => state.sidebarSlice.isSidebarOpen)
  const dispatch = useDispatch();

  const handleNavbarStatus = () => {
    dispatch(toggleSidebar());
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarButtonSearch}>
        {!isSidebarOpen && (
          <div className={styles.navbarOpen}>
            <Image
              onClick={() => handleNavbarStatus()}
              src="/images/icon-menu-hamburger.svg"
              alt="menu-bookmark"
              width={20}
              height={20}
            />
          </div>
        )}
        <Search />
      </div>
      <div className={styles.buttonAndLogo}>
        <div className={styles.addButton}>
          <Button variant='primary'
            icon={
              <AddIcon className={styles.icon} />}>
            Add Bookmark</Button>
        </div>
        <div>
          <Avatar src='/images/image-avatar.webp'></Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;