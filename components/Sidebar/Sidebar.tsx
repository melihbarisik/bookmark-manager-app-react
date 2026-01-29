"use client"

import Image from 'next/image';
import styles from './Sidebar.module.scss';
import homeIcon from '../../public/images/icon-home.svg'
import archiveIcon from '../../public/images/icon-archive.svg'
import logoTheme from '../../public/images/logo-light-theme.svg'
import { usePathname, useRouter } from 'next/navigation'
import TagFilterList from '../TagFilterList/TagFilterList';
import { useAppSelector } from '@/store/hooks';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/store/slices/SidebarSlice';




const Sidebar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isSidebarOpen = useAppSelector(state => state.sidebarSlice.isSidebarOpen);
    const dispatch = useDispatch();

    return <>
        <div
            className={`${styles.overlay} ${isSidebarOpen ? styles.showOverlay : ''}`}
            onClick={() => dispatch(toggleSidebar())}
        />
        <aside className={`${styles.sidebarContainer} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
            <div className={styles.logoContainer}>
                <Image
                    src={logoTheme}
                    alt='logo-theme'
                    width={214}
                    height={32} />
            </div>
            <div className={styles.contentContainer}>
                <div className={`${styles.contentItem} ${pathname === '/' ? styles.active : ""}`} onClick={() => router.push("/")}>
                    <Image
                        src={homeIcon}
                        alt='icon-home'
                        width={24}
                        height={24} />
                    <span>Home</span>
                </div>
                <div className={`${styles.contentItem} ${pathname === '/archived' ? styles.active : ""}`} onClick={() => router.push("archived")}>
                    <Image
                        src={archiveIcon}
                        alt='icon-archive'
                        width={24}
                        height={24} />
                    <span>Archived</span>
                </div>
                <div className={styles.tags}>
                    <span className={styles.tagsHeader}>TAGS</span>
                    <TagFilterList />
                </div>
            </div>
        </aside></>

}



export default Sidebar;