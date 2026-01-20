// components/Badge/Badge.tsx
import styles from "./Badge.module.scss";

interface BadgeProps {
  text: string | number;
  variant?: "primary";
}

export default function Badge({ text, variant = "primary" }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {text}
    </span>
  );
}