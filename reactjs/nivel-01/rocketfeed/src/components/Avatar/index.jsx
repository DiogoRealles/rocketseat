import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

// interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
//   hasBorder?: boolean;
// }

// const Index = ({ hasBorder = true, ...props }: AvatarProps) => {
const Index = () => {
  return (
    <img
      className={styles.avatar}
      // className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
};

export default Index;
