import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

type IdolDoButtonVariant = 'primary' | 'ghost' | 'outline';
type IdolDoButtonSize = 'sm' | 'md' | 'lg';

type IdolDoButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: IdolDoButtonVariant;
  size?: IdolDoButtonSize;
  icon?: ReactNode;
  style?: ViewStyle;
};

const SIZE_STYLE: Record<IdolDoButtonSize, { height: number; paddingHorizontal: number; fontSize: number }> = {
  sm: { height: 40, paddingHorizontal: 18, fontSize: 14 },
  md: { height: 48, paddingHorizontal: 22, fontSize: 16 },
  lg: { height: 56, paddingHorizontal: 26, fontSize: 18 },
};

export function IdolDoButton({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  icon,
  style,
}: IdolDoButtonProps) {
  const { colors } = useIdolDoTheme();
  const sizeConfig = SIZE_STYLE[size];
  const isPrimary = variant === 'primary';
  const isOutline = variant === 'outline';

  const backgroundColor = isPrimary ? colors.primary : 'transparent';
  const borderColor = isOutline ? colors.primary : 'transparent';
  const textColor = isPrimary ? colors.white : colors.textMain;

  function renderPressableStyle({ pressed }: { pressed: boolean }) {
    return [
      styles.base,
      {
        backgroundColor,
        borderColor,
        height: sizeConfig.height,
        paddingHorizontal: sizeConfig.paddingHorizontal,
      },
      isPrimary ? IdolDoShadow.glow : null,
      pressed ? styles.pressed : null,
      style,
    ];
  }

  return (
    <Pressable onPress={onPress} style={renderPressableStyle}>
      {icon ? <View style={styles.icon}>{icon}</View> : null}
      <Text style={[styles.text, { color: textColor, fontSize: sizeConfig.fontSize }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: IdolDoRadius.full,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: IdolDoSpacing.sm,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  text: {
    fontWeight: '700',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
