import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { IdolDoButton } from '@/components/idoldo-button';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoStepper } from '@/components/idoldo-stepper';
import { IdolDoTopBar } from '@/components/idoldo-top-bar';
import { CREATE_STEPS } from '@/constants/create-flow';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

const COVER_OPTIONS = [
  {
    id: 'template-1',
    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrNvOuPGH2YRNYBb0P7yajFiC6__Vz_YAlnjfHN904xq6q1UygWiNw-0SshrZ9pHkAZ5VcmYkXfJJXhHWxSKEAqqqHlRJY6hyBHE78qLhjQf2DMCSv8gYl8IvaHw6D7xFxhr0MP_gEdSYZe8JKjtVyvTXGxOM9qESQMOebKXrh6xN3ITrgiS4k5S9yCKJJgd1Zau9_nn562ifeIpfFhdmYrUbs5RxI1m8XiMJpWLzp9o30g8m_UG5GREFSh95qdhNkf4rjFaCFxZUf',
  },
  {
    id: 'template-2',
    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDkykE66BdA_CIEEjOHP2Kr-MdODQs3l1LMx3-o_2imTR3UkWHgzViQJ-CYtUZGtpu93-S3p1KL44NedqltvcisC3wrv4qeAB_xhHMW9mhPvHXmYwBV_us8jcvHYcRurinTtrk0jOiF405U0TSYp_LOF8GXlaceh9kAnjL7RRfCTaugShQ0VoQAQQ23x_RQlB9NxlD6Qti2bakTGykE8jco02QZSHTeKr3XhELKR4-YjWMHMRfjULiFThn7HdqdhZeWBSKtOBGO6lk',
  },
];

export default function SetGameDetailsScreen() {
  const router = useRouter();
  const { colors } = useIdolDoTheme();
  const [selectedCoverId, setSelectedCoverId] = useState<string | null>(COVER_OPTIONS[0]?.id ?? null);
  const [isPublic, setIsPublic] = useState(true);

  function handleBackPress() {
    router.back();
  }

  function handleCoverPress(coverId: string | null) {
    setSelectedCoverId(coverId);
  }

  function handlePrivacyToggle() {
    setIsPublic((prev) => !prev);
  }

  function handleNextPress() {
    router.push('/create/game-settings');
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <IdolDoTopBar
        title="Metadata"
        onBack={handleBackPress}
        right={<IdolDoIcon name="help" size={22} color={colors.textSub} />}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <IdolDoStepper steps={CREATE_STEPS} currentStep={2} />

        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.textMain }]}>Metadata</Text>
          <Text style={[styles.subtitle, { color: colors.textSub }]}>
            Make your mini-game shine with a catchy name and cover.
          </Text>
        </View>

        <View style={styles.formBlock}>
          <Text style={[styles.label, { color: colors.textMain }]}>Game Name</Text>
          <View style={[styles.inputRow, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <TextInput
              placeholder="My Favorite Idol Match"
              placeholderTextColor={colors.textMuted}
              style={[styles.input, { color: colors.textMain }]}
            />
            <IdolDoIcon name="edit" size={18} color={colors.textMuted} />
          </View>
        </View>

        <View style={styles.formBlock}>
          <Text style={[styles.label, { color: colors.textMain }]}>Cover Photo</Text>
          <View style={styles.coverGrid}>
            <Pressable
              style={[
                styles.coverCustom,
                {
                  borderColor: selectedCoverId === 'custom' ? colors.primary : colors.border,
                  backgroundColor: colors.surfaceAlt,
                },
              ]}
              onPress={() => handleCoverPress('custom')}
            >
              <View style={[styles.coverCustomIcon, { backgroundColor: colors.surfaceMuted }]}>
                <IdolDoIcon name="add-a-photo" size={18} color={colors.textMuted} />
              </View>
              <Text style={[styles.coverCustomText, { color: colors.textMuted }]}>Custom</Text>
            </Pressable>
            {COVER_OPTIONS.map((cover) => {
              const isSelected = cover.id === selectedCoverId;
              return (
                <Pressable
                  key={cover.id}
                  style={[
                    styles.coverOption,
                    isSelected ? { borderColor: colors.primary } : { borderColor: 'transparent' },
                  ]}
                  onPress={() => handleCoverPress(cover.id)}
                >
                  <Image source={{ uri: cover.uri }} style={styles.coverImage} contentFit="cover" />
                  {isSelected ? (
                    <View style={styles.coverSelectedOverlay}>
                      <View style={[styles.coverCheck, { backgroundColor: colors.primary }]}>
                        <IdolDoIcon name="check" size={16} color={colors.white} />
                      </View>
                    </View>
                  ) : null}
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.formBlock}>
          <Text style={[styles.label, { color: colors.textMain }]}>Description / Greeting</Text>
          <TextInput
            placeholder="Write a sweet message for other fans to see when they start your game..."
            placeholderTextColor={colors.textMuted}
            style={[styles.textArea, { color: colors.textMain, backgroundColor: colors.surface, borderColor: colors.border }]}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.formBlock}>
          <Text style={[styles.label, { color: colors.textMain }]}>Privacy</Text>
          <Pressable
            style={[styles.privacyCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
            onPress={handlePrivacyToggle}
          >
            <View style={styles.privacyInfo}>
              <View style={[styles.privacyIcon, { backgroundColor: `${colors.primary}22` }]}>
                <IdolDoIcon name={isPublic ? 'public' : 'lock'} size={18} color={colors.primary} />
              </View>
              <View>
                <Text style={[styles.privacyTitle, { color: colors.textMain }]}>
                  {isPublic ? 'Public' : 'Private'}
                </Text>
                <Text style={[styles.privacySubtitle, { color: colors.textSub }]}>
                  {isPublic ? 'Shared with community' : 'Only you can access'}
                </Text>
              </View>
            </View>
            <View style={[styles.toggleTrack, { backgroundColor: isPublic ? colors.primary : colors.surfaceMuted }]}>
              <View
                style={[
                  styles.toggleDot,
                  { backgroundColor: colors.white, marginLeft: isPublic ? 22 : 2 },
                ]}
              />
            </View>
          </Pressable>
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { backgroundColor: colors.background }]}>
        <IdolDoButton
          title="Next: Configs"
          size="lg"
          onPress={handleNextPress}
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
    paddingBottom: 140,
  },
  header: {
    paddingHorizontal: IdolDoSpacing.lg,
    paddingBottom: IdolDoSpacing.lg,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: IdolDoSpacing.xs,
    fontSize: 14,
    fontWeight: '500',
  },
  formBlock: {
    paddingHorizontal: IdolDoSpacing.lg,
    marginBottom: IdolDoSpacing.lg,
    gap: IdolDoSpacing.sm,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: IdolDoRadius.lg,
    borderWidth: 1,
    paddingHorizontal: IdolDoSpacing.md,
    height: 52,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  coverGrid: {
    flexDirection: 'row',
    gap: IdolDoSpacing.sm,
  },
  coverCustom: {
    flex: 1,
    aspectRatio: 3 / 4,
    borderRadius: IdolDoRadius.lg,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  coverCustomIcon: {
    width: 36,
    height: 36,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverCustomText: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  coverOption: {
    flex: 1,
    aspectRatio: 3 / 4,
    borderRadius: IdolDoRadius.lg,
    overflow: 'hidden',
    borderWidth: 3,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  coverSelectedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverCheck: {
    width: 32,
    height: 32,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    ...IdolDoShadow.soft,
  },
  textArea: {
    borderRadius: IdolDoRadius.lg,
    borderWidth: 1,
    paddingHorizontal: IdolDoSpacing.md,
    paddingVertical: IdolDoSpacing.sm,
    fontSize: 14,
    fontWeight: '500',
    textAlignVertical: 'top',
  },
  privacyCard: {
    borderRadius: IdolDoRadius.lg,
    borderWidth: 1,
    padding: IdolDoSpacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...IdolDoShadow.soft,
  },
  privacyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: IdolDoSpacing.md,
  },
  privacyIcon: {
    width: 40,
    height: 40,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  privacyTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  privacySubtitle: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: '500',
  },
  toggleTrack: {
    width: 48,
    height: 28,
    borderRadius: IdolDoRadius.full,
    padding: 2,
    justifyContent: 'center',
  },
  toggleDot: {
    width: 24,
    height: 24,
    borderRadius: IdolDoRadius.full,
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
