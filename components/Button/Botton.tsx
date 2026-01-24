import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => void,
    variant?: 'primary' | 'outline' | 'danger' | 'ghost' | '';
}

const Button: React.FC<ButtonProps> = ({
    icon,
    children,
    className,
    onClick,
    variant = ''
}) => {
    const variantClass = styles[variant] || '';
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${styles.button} ${variantClass} ${className ?? ''}`}
        >
            {/* İkonu sarmalayan span styles.icon alarak flex-shrink: 0 olacak */}
            {icon && <span className={styles.icon}>{icon}</span>}
            <span className={styles.label}>{children}</span>
        </button>
    );
};


export default Button;