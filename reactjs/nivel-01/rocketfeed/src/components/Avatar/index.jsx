import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

// interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
//   hasBorder?: boolean;
// }

const Index = ({ hasBorder = true, ...props }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
};

export default Index;
