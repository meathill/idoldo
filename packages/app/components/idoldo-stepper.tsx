import { StyleSheet, Text, View } from 'react-native';

import { IdolDoRadius, IdolDoSpacing } from '@/constants/idoldo-theme';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

type IdolDoStepperProps = {
  steps: string[];
  currentStep: number;
};

export function IdolDoStepper({ steps, currentStep }: IdolDoStepperProps) {
  const { colors } = useIdolDoTheme();

  return (
    <View style={styles.container}>
      {steps.map((label, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const circleStyle = isCompleted || isActive ? colors.primary : colors.surface;
        const borderColor = isCompleted || isActive ? colors.primary : colors.border;
        const textColor = isCompleted || isActive ? colors.primary : colors.textMuted;

        return (
          <View key={`${label}-${index}`} style={styles.stepItemWrapper}>
            <View style={styles.stepRow}>
              <View style={[styles.circle, { backgroundColor: circleStyle, borderColor }]}
              >
                {isCompleted ? (
                  <IdolDoIcon name="check" size={16} color={colors.white} />
                ) : (
                  <Text style={[styles.stepIndex, { color: isActive ? colors.white : colors.textMuted }]}>
                    {index + 1}
                  </Text>
                )}
              </View>
              {index < steps.length - 1 ? (
                <View
                  style={[
                    styles.connector,
                    { backgroundColor: isCompleted ? colors.primary : colors.border },
                  ]}
                />
              ) : null}
            </View>
            <Text style={[styles.stepLabel, { color: textColor }]}>{label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: IdolDoSpacing.lg,
    paddingVertical: IdolDoSpacing.md,
  },
  stepItemWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  connector: {
    flex: 1,
    height: 2,
    marginHorizontal: IdolDoSpacing.sm,
    borderRadius: IdolDoRadius.full,
  },
  stepIndex: {
    fontSize: 12,
    fontWeight: '700',
  },
  stepLabel: {
    marginTop: IdolDoSpacing.xs,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
});
