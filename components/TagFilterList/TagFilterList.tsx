"use client"

import styles from './TagFilterList.module.scss'
import Checkbox from '../Checkbox/Checkbox'
import Badge from '../Badge/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { tagFilterChange } from '@/store/slices/tagFilterSlice';


export default function TagFilterList() {
    const dispatch = useDispatch();
    const tagFilters = useSelector((state: any) => state.tagFilter.items);

    const handleCheckboxChange = (label: string) => {
        dispatch(tagFilterChange(label))

    }

    return (
        <>
            {tagFilters.map((data: any, index: number) => (
                <div className={styles.items} key={index}>
                    <Checkbox
                        label={data.label}
                        onChange={(label) => handleCheckboxChange(label)}
                    />
                    <Badge text={data.count} />
                </div>
            ))}
        </>
    );

}