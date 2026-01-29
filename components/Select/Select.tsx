'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Select.module.scss';
import Image from 'next/image'

export type Option = {
    label: string;
    value: string;
    url?: string;
};

interface SelectProps {
    label?: string;
    options: Option[];
    value: string;
    onChange: (val: string) => void;
    icon?: React.ReactNode;
    className?: string;
}

export default function Select({ label, options, value, onChange, icon, className }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isIconOnly = !label && icon;

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Seçim yapıldığında çalışacak fonksiyon
    const handleSelect = (val: string) => {
        onChange(val);
        setIsOpen(false);
    };

    // Şu an seçili olan option'ı bul (Label'ı göstermek için gerekebilir)
    const selectedOption = options.find((opt) => opt.value === value);

    return (
        <div
            ref={containerRef}
            className={styles.container}
        >
            {/* Tetikleyici Buton */}
            <button
                className={`${styles.trigger} ${isOpen ? styles.open : ''} ${isIconOnly ? styles.iconOnly : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                type="button"
            >
                {icon && <span className={`${styles.icon} ${className ?? ""} `}>{icon}</span>}
                {label && <span className={styles.label}>{label || selectedOption?.label}</span>}
            </button>

            {/* Dropdown Menü */}
            {isOpen && (
                <div className={styles.dropdown}>
                    <ul className={styles.list}>
                        {options.map((option) => (
                            <li
                                key={option.value}
                                className={`${styles.item} ${value === option.value ? styles.selected : ''}`}
                                onClick={() => handleSelect(option.value)}
                            >
                                <span className={styles.optionWithImage}>{option.url && <Image src={option.url} alt='option-url' width={16} height={16} />}{option.label}</span>
                                {value === option.value && <Image src="/images/icon-check.svg" alt='check-icon' width={16} height={16}></Image>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}