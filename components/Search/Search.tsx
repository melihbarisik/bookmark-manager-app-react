"use client"

import styles from "./Search.module.scss"
import searchIcon from "../../public/images/icon-search.svg"
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/store/slices/productSlice";


const Search = () => {
    const dispatch = useDispatch();
    const handleSearch = (value: string) => {
       dispatch(setSearchQuery(value))
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
            defaultValue={""}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by title..." />
    </div>;
}


export default Search;