import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { IdolDoRadius, IdolDoSpacing } from '@/constants/idoldo-theme';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

type IdolDoTopBarProps = {
  title: string;
  onBack?: () => void;
  right?: ReactNode;
};

export function IdolDoTopBar({ title, onBack, right }: IdolDoTopBarProps) {
  const { colors } = useIdolDoTheme();

  function renderBackButton() {
    if (!onBack) {
      return <View style={styles.iconSpacer} />;
    }

    return (
      <Pressable onPress={onBack} style={styles.iconButton}>
        <IdolDoIcon name="arrow-back" size={24} color={colors.textMain} />
      </Pressable>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}
    >
      {renderBackButton()}
      <Text style={[styles.title, { color: colors.textMain }]} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.iconSpacer}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: IdolDoSpacing.md,
    paddingTop: IdolDoSpacing.sm,
    paddingBottom: IdolDoSpacing.sm,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSpacer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
