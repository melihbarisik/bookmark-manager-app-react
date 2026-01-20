import styles from './Checkbox.module.scss'


interface CheckboxProps {
    label: string;
    onChange(): () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    onChange
}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange();
    };

    return (
        <label className={styles.checkboxContainer}>
            <input
                type="checkbox"
                className={styles.hiddenCheckbox}
                onChange={handleChange}
            />

            <span className={styles.customCheckbox} />

            <span className={styles.labelTexts}>{label}</span>
        </label>
    );
};

export default Checkbox;