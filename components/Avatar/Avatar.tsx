"use client"

import Image from 'next/image';
import styles from './Avatar.module.scss';
import { useRef, useState } from 'react';
import Divider from '../Divider/Divider';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'avatar',
  size = 40,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={styles.avatar}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          onClick={() => setIsOpen(!isOpen)}
          src={src}
          alt={alt}
          width={size}
          height={size}
        />
      ) : (
        <span className={styles.fallback}>?</span>
      )}
      {isOpen && <div className={styles.dropdown}>
        <div className={styles.infoContainer}>
          <div className={styles.imageDiv}>
            <Image
              src={src}
              alt={alt}
              width={size}
              height={size}
            />
          </div>
          <div className={styles.nameEmail}>
            <span className={styles.nameInfo}>Emily Carter</span>
            <span className={styles.mailInfo}>emily101@email.com</span>
          </div>
        </div>
        <Divider></Divider>
        <div className={styles.themeContainer}>
          <div className={styles.labelGroup}>
            <Image
              src="/images/icon-theme.svg"
              alt="icon-theme"
              width={16}
              height={16}
            />
            <span>Theme</span>
          </div>

          <div className={styles.togglePlaceholder}>
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
        <Divider></Divider>
        <div className={styles.footer}>
          <Image
            src="/images/icon-logout.svg"
            alt='logout'
            width={16}
            height={16}/>
            <span className={styles.footerSpan}>Logout</span>
        </div>
      </div>}
    </div>
  );
};

export default Avatar;
