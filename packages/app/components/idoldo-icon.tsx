import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ComponentProps } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export type IdolDoIconName = ComponentProps<typeof MaterialIcons>['name'];

type IdolDoIconProps = {
  name: IdolDoIconName;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
};

export function IdolDoIcon({ name, size = 24, color, style }: IdolDoIconProps) {
  return (
    <MaterialIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
}
