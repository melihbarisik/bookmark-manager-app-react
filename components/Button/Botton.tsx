import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    icon,
    children,
}) => {

    return (
        <button
            type="button"
            className={styles.button}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
};

export default Button;