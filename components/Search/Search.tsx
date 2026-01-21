"use client"

import styles from "./Search.module.scss"
import searchIcon from "../../public/images/icon-search.svg"
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';


const Search = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearch = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('q', value);
        } else {
            params.delete('q');
        }
        router.push(`/?${params.toString()}`);
    };


    return <div className={styles.searchWrapper}>
        <span className={styles.searchIcon}>
            <Image
                src={searchIcon}
                alt='searchIcon'
                width={20}
                height={20} />
        </span>
        <input
            type="search"
            defaultValue={searchParams.get('q') || ''}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by title..." />
    </div>;
}


export default Search;