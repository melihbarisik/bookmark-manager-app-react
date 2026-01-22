'use client';
import styles from './ThemeToggle.module.scss'
import Image from 'next/image';

const ThemeToggle = () => {

    const handleThemeColor = (value: boolean) => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
    }

    return (
        <div className={styles.toggleWrapper}>
            <label className={styles.switch}>
                {/* Durumu tutan gizli checkbox */}
                <input type="checkbox" onChange={(e) => handleThemeColor(e.target.checked)} />

                {/* Arka plandaki hareket eden beyaz kutu */}
                <span className={styles.slider}></span>

                {/* İkonlar */}
                <div className={styles.icons}>
                    <div className={styles.iconBox}>
                        <Image
                            src="/images/icon-light-theme.svg"
                            alt='light-theme'
                            width={16}
                            height={16}
                        />
                    </div>
                    <div className={styles.iconBox}>
                        <Image
                            src="/images/icon-dark-theme.svg"
                            alt='dark-theme'
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
            </label>
        </div>
    );
};

export default ThemeToggle;