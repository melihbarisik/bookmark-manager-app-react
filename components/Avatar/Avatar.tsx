import Image from 'next/image';
import styles from './Avatar.module.scss';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number; // default 40
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'avatar',
  size = 40,
}) => {
  return (
    <div
      className={styles.avatar}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
        />
      ) : (
        <span className={styles.fallback}>?</span>
      )}
    </div>
  );
};

export default Avatar;
