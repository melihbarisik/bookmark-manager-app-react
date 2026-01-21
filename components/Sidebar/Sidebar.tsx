"use client"

import Image from 'next/image';
import styles from './Sidebar.module.scss';
import homeIcon from '../../public/images/icon-home.svg'
import archiveIcon from '../../public/images/icon-archive.svg'
import logoTheme from '../../public/images/logo-light-theme.svg'
import Checkbox from '../Checkbox/Checkbox';
import Badge from '../Badge/Badge';
import { usePathname, useRouter } from 'next/navigation'

const sideBarData = [
    { label: "AI", count: 1 },
    { label: "Community", count: 5 },
    { label: "Compatibility", count: 1 },
    { label: "CSS", count: 6 },
    { label: "Design", count: 1 },
    { label: "Framework", count: 2 },
    { label: "Git", count: 1 },
    { label: "Html", count: 2 },
    { label: "Javascript", count: 3 },
    { label: "Layout", count: 3 },
    { label: "Learning", count: 6 },
    { label: "Performance", count: 2 },
    { label: "Practice", count: 5 },
    { label: "Reference", count: 4 },
    { label: "Tips", count: 4 },
    { label: "Tool", count: 4 },
    { label: "Tutorial", count: 3 }
]


const Sidebar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleCheckboxChange = () => {
        
    }
    return <aside className={styles.sidebarContainer}>
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
                {sideBarData.map((data, index) => (
                    <div className={styles.items} key={index}>
                        <Checkbox label={data.label} onChange={() => handleCheckboxChange}></Checkbox>
                        <Badge text={data.count}></Badge>
                    </div>
                ))}
            </div>
        </div>
    </aside>
}



export default Sidebar;