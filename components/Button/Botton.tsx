import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
    icon,
    children,
    className,
    onClick
}) => {

    return (
        <button
            type="button"
            onClick={onClick}
            className={`${styles.button}  ${className ?? ''}`}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
};

export default Button;