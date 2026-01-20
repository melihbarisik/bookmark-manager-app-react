import React from 'react';
import styles from './Navbar.module.scss';
import Search from '../Search/Search';
import Button from '../Button/Botton';
import AddIcon from '@/icons/AddIcon';
import Avatar from '../Avatar/Avatar';
import ImageAvatar from '../../public/images/image-avatar.webp'


const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div><Search></Search></div>
      <div className={styles.buttonAndLogo}>
        <div className={styles.addButton}>
          <Button
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