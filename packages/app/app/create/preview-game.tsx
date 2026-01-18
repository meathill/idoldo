import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { IdolDoButton } from '@/components/idoldo-button';
import { IdolDoGamePreview } from '@/components/idoldo-game-preview';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoStepper } from '@/components/idoldo-stepper';
import { IdolDoTopBar } from '@/components/idoldo-top-bar';
import { CREATE_STEPS } from '@/constants/create-flow';
import { IdolDoRadius, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

export default function PreviewGameScreen() {
  const router = useRouter();
  const { colors } = useIdolDoTheme();

  function handleBackPress() {
    router.back();
  }

  function handlePublishPress() {
    router.push('/create/game-result');
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <IdolDoTopBar title="Preview Game" onBack={handleBackPress} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <IdolDoStepper steps={CREATE_STEPS} currentStep={4} />
        <View style={styles.readyBadge}>
          <IdolDoIcon name="check-circle" size={18} color={colors.white} />
          <Text style={styles.readyText}>Ready to Play!</Text>
        </View>

        <IdolDoGamePreview />
      </ScrollView>

      <View style={[styles.bottomBar, { backgroundColor: colors.background }]}>
        <IdolDoButton
          title="Publish & Share"
          size="lg"
          onPress={handlePublishPress}
          icon={<IdolDoIcon name="rocket-launch" size={18} color={colors.white} />}
          style={styles.bottomButton}
        />
        <IdolDoButton title="Save to Drafts" variant="ghost" size="sm" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 160,
    alignItems: 'center',
  },
  readyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#ee2bad',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: IdolDoRadius.full,
    marginTop: IdolDoSpacing.sm,
    marginBottom: IdolDoSpacing.lg,
  },
  readyText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: IdolDoSpacing.lg,
    paddingBottom: IdolDoSpacing.lg,
    paddingTop: IdolDoSpacing.sm,
    gap: IdolDoSpacing.sm,
  },
  bottomButton: {
    width: '100%',
  },
});
