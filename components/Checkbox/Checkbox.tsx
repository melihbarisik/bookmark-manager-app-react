import styles from './Checkbox.module.scss'


interface CheckboxProps {
    label: string;
    onChange: (label:string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    onChange
}) => {

    return (
        <label className={styles.checkboxContainer}>
            <input
                type="checkbox"
                className={styles.hiddenCheckbox}
                onChange={() => onChange(label)}
            />

            <span className={styles.customCheckbox} />

            <span className={styles.labelTexts}>{label}</span>
        </label>
    );
};

export default Checkbox;