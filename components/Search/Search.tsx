import styles from "./Search.module.scss"
import searchIcon from "../../public/images/icon-search.svg"
import Image from 'next/image';


const Search: React.FC = () => {
    return <div className={styles.searchWrapper}>
        <span className={styles.searchIcon}>
            <Image
                src={searchIcon}
                alt='searchIcon'
                width={20}
                height={20} />
        </span>
        <input
            type="text"
            placeholder="Search by title..." />
    </div>;
}


export default Search;