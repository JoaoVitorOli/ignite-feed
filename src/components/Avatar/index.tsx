import styles from './styles.module.css';

interface AvatarProps {
  img: string;
  hasBorder?: boolean;
}

export function Avatar({ img, hasBorder = true }: AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={img} 
      alt="Profile" 
    />
  );
}