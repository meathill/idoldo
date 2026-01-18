import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';

import { IdolDoButton } from '@/components/idoldo-button';
import { IdolDoGamePreview } from '@/components/idoldo-game-preview';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoStepper } from '@/components/idoldo-stepper';
import { IdolDoTopBar } from '@/components/idoldo-top-bar';
import { CREATE_STEPS } from '@/constants/create-flow';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

export default function GameSettingsScreen() {
  const router = useRouter();
  const { colors } = useIdolDoTheme();
  const [hintEnabled, setHintEnabled] = useState(true);
  const [shuffleEnabled, setShuffleEnabled] = useState(true);
  const [bulletChatEnabled, setBulletChatEnabled] = useState(true);
  const settingsIndex = 3;
  function handleBackPress() {
    router.back();
  }

  function handleSavePress() {
    router.push('/create/preview-game');
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <IdolDoTopBar title="Configs" onBack={handleBackPress} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <IdolDoStepper steps={CREATE_STEPS} currentStep={settingsIndex} />
        <View style={styles.previewWrap}>
          <IdolDoGamePreview width={240} height={440} />
        </View>

        <View style={styles.sectionStack}>
          <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={styles.sectionHeader}>
              <IdolDoIcon name="bolt" size={20} color={colors.primary} />
              <Text style={[styles.sectionTitle, { color: colors.textMain }]}>Power-ups Config</Text>
            </View>
            <View style={styles.powerRow}>
              <View>
                <Text style={[styles.powerLabel, { color: colors.textMain }]}>Hint</Text>
                <Text style={[styles.powerHint, { color: colors.textSub }]}>Highlight a possible match</Text>
              </View>
              <View style={styles.powerAction}>
                <View style={[styles.pointsPill, { backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}>
                  <IdolDoIcon name="favorite" size={14} color={colors.primary} />
                  <Text style={[styles.pointsText, { color: colors.textMain }]}>50 pts</Text>
                </View>
                <Switch
                  value={hintEnabled}
                  onValueChange={setHintEnabled}
                  trackColor={{ false: colors.border, true: colors.primary }}
                  thumbColor={colors.white}
                />
              </View>
            </View>
            <View style={styles.powerRow}>
              <View>
                <Text style={[styles.powerLabel, { color: colors.textMain }]}>Shuffle</Text>
                <Text style={[styles.powerHint, { color: colors.textSub }]}>Mix tiles to keep the flow</Text>
              </View>
              <View style={styles.powerAction}>
                <View style={[styles.pointsPill, { backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}>
                  <IdolDoIcon name="favorite" size={14} color={colors.primary} />
                  <Text style={[styles.pointsText, { color: colors.textMain }]}>35 pts</Text>
                </View>
                <Switch
                  value={shuffleEnabled}
                  onValueChange={setShuffleEnabled}
                  trackColor={{ false: colors.border, true: colors.primary }}
                  thumbColor={colors.white}
                />
              </View>
            </View>
          </View>

          <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={styles.sectionHeader}>
              <IdolDoIcon name="photo" size={20} color={colors.primary} />
              <Text style={[styles.sectionTitle, { color: colors.textMain }]}>Exclusive Reward</Text>
            </View>
            <Pressable style={[styles.uploadCard, { borderColor: colors.border, backgroundColor: colors.surfaceAlt }]}>
              <View style={[styles.uploadIcon, { backgroundColor: `${colors.primary}18` }]}>
                <IdolDoIcon name="add-photo-alternate" size={22} color={colors.primary} />
              </View>
              <Text style={[styles.uploadTitle, { color: colors.primary }]}>Add Exclusive Idol Photo</Text>
              <Text style={[styles.uploadSubtitle, { color: colors.textSub }]}>
                Players unlock this after winning
              </Text>
            </Pressable>
          </View>

          <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={styles.sectionHeader}>
              <IdolDoIcon name="tune" size={20} color={colors.primary} />
              <Text style={[styles.sectionTitle, { color: colors.textMain }]}>Game Logic</Text>
            </View>
            <View style={styles.sliderBlock}>
              <View style={styles.sliderHeader}>
                <Text style={[styles.sliderLabel, { color: colors.textSub }]}>Time Limit</Text>
                <Text style={[styles.sliderValue, { color: colors.primary }]}>60s</Text>
              </View>
              <View style={[styles.sliderTrack, { backgroundColor: colors.surfaceMuted }]}>
                <View style={[styles.sliderFill, { backgroundColor: colors.primary, width: '40%' }]} />
              </View>
              <View style={styles.sliderRange}>
                <Text style={[styles.sliderHint, { color: colors.textMuted }]}>30s</Text>
                <Text style={[styles.sliderHint, { color: colors.textMuted }]}>300s</Text>
              </View>
            </View>
            <View style={styles.sliderBlock}>
              <View style={styles.sliderHeader}>
                <Text style={[styles.sliderLabel, { color: colors.textSub }]}>Grid Size</Text>
                <Text style={[styles.sliderValue, { color: colors.primary }]}>4x4</Text>
              </View>
              <View style={[styles.sliderTrack, { backgroundColor: colors.surfaceMuted }]}>
                <View style={[styles.sliderFill, { backgroundColor: colors.primary, width: '55%' }]} />
              </View>
              <View style={styles.sliderRange}>
                <Text style={[styles.sliderHint, { color: colors.textMuted }]}>Easy 3x3</Text>
                <Text style={[styles.sliderHint, { color: colors.textMuted }]}>Hard 6x6</Text>
              </View>
            </View>
          </View>

          <View style={[styles.sectionCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <View style={styles.sectionHeader}>
              <IdolDoIcon name="forum" size={20} color={colors.primary} />
              <Text style={[styles.sectionTitle, { color: colors.textMain }]}>Fan Engagement</Text>
            </View>
            <View style={styles.toggleRow}>
              <View>
                <Text style={[styles.powerLabel, { color: colors.textMain }]}>Bullet Chat</Text>
                <Text style={[styles.powerHint, { color: colors.textSub }]}>Show fan comments during gameplay</Text>
              </View>
              <Switch
                value={bulletChatEnabled}
                onValueChange={setBulletChatEnabled}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.white}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { backgroundColor: colors.background }]}>
        <IdolDoButton
          title="Next: Preview & Publish"
          size="lg"
          onPress={handleSavePress}
          icon={<IdolDoIcon name="arrow-forward" size={20} color={colors.white} />}
        />
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
  },
  previewWrap: {
    alignItems: 'center',
    paddingVertical: IdolDoSpacing.md,
  },
  sectionStack: {
    paddingHorizontal: IdolDoSpacing.lg,
    gap: IdolDoSpacing.md,
  },
  sectionCard: {
    borderRadius: IdolDoRadius.lg,
    borderWidth: 1,
    padding: IdolDoSpacing.lg,
    gap: IdolDoSpacing.md,
    ...IdolDoShadow.soft,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: IdolDoSpacing.sm,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  powerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: IdolDoSpacing.md,
  },
  powerLabel: {
    fontSize: 14,
    fontWeight: '700',
  },
  powerHint: {
    marginTop: 4,
    fontSize: 11,
    fontWeight: '500',
  },
  powerAction: {
    alignItems: 'flex-end',
    gap: IdolDoSpacing.xs,
  },
  pointsPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: IdolDoRadius.full,
    borderWidth: 1,
  },
  pointsText: {
    fontSize: 11,
    fontWeight: '700',
  },
  uploadCard: {
    borderRadius: IdolDoRadius.lg,
    borderWidth: 1,
    borderStyle: 'dashed',
    alignItems: 'center',
    paddingVertical: IdolDoSpacing.lg,
    paddingHorizontal: IdolDoSpacing.md,
  },
  uploadIcon: {
    width: 44,
    height: 44,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: IdolDoSpacing.sm,
  },
  uploadTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  uploadSubtitle: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: '500',
  },
  sliderBlock: {
    gap: IdolDoSpacing.xs,
  },
  sliderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderLabel: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  sliderValue: {
    fontSize: 12,
    fontWeight: '700',
  },
  sliderTrack: {
    height: 6,
    borderRadius: IdolDoRadius.full,
    overflow: 'hidden',
  },
  sliderFill: {
    height: '100%',
    borderRadius: IdolDoRadius.full,
  },
  sliderRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderHint: {
    fontSize: 10,
    fontWeight: '600',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: IdolDoSpacing.md,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: IdolDoSpacing.lg,
    paddingBottom: IdolDoSpacing.lg,
    paddingTop: IdolDoSpacing.sm,
  },
});
