import {Pressable} from 'react-native';
import {IconComponent} from '../icons';
import styles from './style';

export interface IBtnIconProps {
  onPress?: () => void;
  icon: IconComponent;
  size?: 'sm' | 'md';
  color?: string;
}

export default function BtnIcon({
  icon: Icon,
  size = 'md',
  color = 'white',
}: IBtnIconProps) {
  return (
    <Pressable
      style={{
        ...styles.container,
        ...(size === 'sm' ? styles.smallBtn : styles.mediumBtn),
      }}>
      {<Icon color={color} />}
    </Pressable>
  );
}
