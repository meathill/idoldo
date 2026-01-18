import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

import { IdolDoRadius, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

type IdolDoChipProps = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
};

export function IdolDoChip({ label, selected = false, onPress, style }: IdolDoChipProps) {
  const { colors } = useIdolDoTheme();
  const backgroundColor = selected ? colors.primary : colors.surface;
  const textColor = selected ? colors.white : colors.textMain;
  const borderColor = selected ? colors.primary : colors.border;

  function renderPressableStyle({ pressed }: { pressed: boolean }) {
    return [
      styles.base,
      { backgroundColor, borderColor },
      pressed ? styles.pressed : null,
      style,
    ];
  }

  return (
    <Pressable onPress={onPress} style={renderPressableStyle}>
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: IdolDoRadius.full,
    borderWidth: 1,
    paddingHorizontal: IdolDoSpacing.md,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    transform: [{ scale: 0.97 }],
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
});
