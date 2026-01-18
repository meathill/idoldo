import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

import { IdolDoButton } from '@/components/idoldo-button';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoStepper } from '@/components/idoldo-stepper';
import { IdolDoTopBar } from '@/components/idoldo-top-bar';
import { CREATE_STEPS } from '@/constants/create-flow';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

type PhotoSlot = {
  id: string;
  type: 'filled' | 'empty';
  uri?: string;
};

const PHOTO_POOL = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCLtOaShAi8oVnmpAIqmdzOOlrAsit34_qMYgtukO45Vf0pIFtzjuDhqEcH5BnNawndxGAJdSDD9z-Nhk9k4qBmKuDSNI7AAIER1qEMLxd8-4G42AhNDh0zjGXkOx_qapAA3xrIP3QCB59XPX06I4YDKnY8-nibSTQR8vgemcYeA6VHq47IOKM0047rNPMvSRK7JOMViHIlQmpCRB2e44hIRhKTUuwnutS0dQMLgS-rkxlcrjNdVAlsvbCKHuXkwwqIRN9ALLSVju5A',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA8J1YDqIw7xYmnY8gwMQdZ4-fRX-fYk_XU5FACUdmAU6MLa8_83Juvs16t7mbZv0prTRQKdFNlCZs43v3lwlZCJZN64nHiZXqYVKFnPSxL1SstYqDDzLQuX-S10IUDwfjXsibNmeW4vtJ-M46-KygmpjZjdVQiFNgz6AvCb_tXv4eZpmXcGjxjShEcMGiAA37ljgYtTshJPw5kjaOZDeqUH0wc3odu8mlV_1sJq1cePkBSp-73hwONptb6KxNKR3IrcEQ3vdwvC8CP',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCsKrEELtqCb2kYhFZT6GWiXGruISkkDJZr1izq9SVDoQZ3bFwqapmnjdwoYADnSntXiHJhDKC6xy2sMRUJgcG77Ysj-hLb14WK6-M4Sg1e7LaFiwkKOITqEJ4fu3gEq7H1Pa1eGVec-J3QD53ktFE8wFt-c_5J6yQEgse31UA-cOOhnyz7vUs-2pJQbL1bxNRaUIa3zL5dZC2VTx_Wfa-U8sQPIshHSnsl1NhzEiv2QrL4JRK5uhFvJ63vJLol0UtRLnvJdXxfDgUD',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB44Y7nW2CDRnDVvlb_GiPXqhvxBEmOvNDbUPIatqNb8LE7tXfB6AtGdhMvDlqAHigSzpptodR_pbEJ1JKixsUzhpRarZYPBMuEXPaqqoXpQsBDBSqHErcUfcYl8HUh-IR7qrT-QCaOXfyYwaeHu8hcM7IYKqu7a0TZRtklncIkAyHlXss74dNS0lSXuzwR77NNMsnH3YrOD0lhk5j4ylBkcptKMvXq46DNgDVBX_foUFVX-REiHupbYgy6gn9oCH0u3EV3H-Wdtscx',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDnq1vX51rBhnAsHAPzW3CAZnUJ_0ckTqscl_-5bLV9t5liG9trk3d4eUa1s_3BEncte0KbUOUDDoBXvvNNJ70NZX40bNTDhq5WN1IJhDHYUcwGtk37gwPy6qYGJUWAN82wMaG8gt98wZwAn89S1jZ1hnxHKBYQXITzk5NLVWlOgH6JOlabX42pamdUDtoSejAaKRzvqnakBo6TRR016aElJzw0zzJrMvfUzUS09i1KuEqa8cLVjVMOm6e10Fm7eGyYh4hgji1tMuIC',
];

const COLOR_PRESETS = ['#ee2bad', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#6366f1'];

export default function UploadAssetsScreen() {
  const router = useRouter();
  const { colors } = useIdolDoTheme();
  const [retouchEnabled, setRetouchEnabled] = useState(true);
  const [selectedColor, setSelectedColor] = useState(COLOR_PRESETS[0]);

  const slots = useMemo(() => {
    const totalSlots = 16;
    const filledSlots = PHOTO_POOL.map((uri, index) => ({
      id: `filled-${index}`,
      type: 'filled' as const,
      uri,
    }));

    const emptySlots = Array.from({ length: totalSlots - filledSlots.length }, (_, index) => ({
      id: `empty-${index}`,
      type: 'empty' as const,
    }));

    return [...filledSlots, ...emptySlots];
  }, []);

  function handleBackPress() {
    router.back();
  }

  function handleNextPress() {
    router.push('/create/set-game-details');
  }

  function handleSelectColor(color: string) {
    setSelectedColor(color);
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <IdolDoTopBar title="Upload Idol Photos" onBack={handleBackPress} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <IdolDoStepper steps={CREATE_STEPS} currentStep={1} />

        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.textMain }]}>Upload Idol Photos</Text>
          <Text style={[styles.subtitle, { color: colors.textSub }]}>Tap to fill the game board (Min. 10 photos)</Text>
        </View>

        <View style={styles.grid}>
          {slots.map((slot) => (
            <View key={slot.id} style={styles.gridItem}>
              {slot.type === 'filled' && slot.uri ? (
                <View style={styles.filledSlot}>
                  <Image source={{ uri: slot.uri }} style={styles.photo} contentFit="cover" />
                  <Pressable style={[styles.editButton, { backgroundColor: colors.surface }]}
                  >
                    <IdolDoIcon name="edit" size={14} color={colors.primary} />
                  </Pressable>
                </View>
              ) : (
                <Pressable style={[styles.emptySlot, { borderColor: colors.primary }]}
                >
                  <IdolDoIcon name="add" size={20} color={colors.primary} />
                </Pressable>
              )}
            </View>
          ))}
        </View>

        <View style={styles.toolsSection}>
          <View style={[styles.toolCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
          >
            <View style={styles.toolInfo}>
              <View style={[styles.toolIcon, { backgroundColor: `${colors.primary}22` }]}
              >
                <IdolDoIcon name="auto-fix-high" size={18} color={colors.primary} />
              </View>
              <View>
                <Text style={[styles.toolTitle, { color: colors.textMain }]}>Magic Retouch</Text>
                <Text style={[styles.toolSubtitle, { color: colors.textSub }]}>Auto brighten & smooth photos</Text>
              </View>
            </View>
            <Switch
              value={retouchEnabled}
              onValueChange={setRetouchEnabled}
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={colors.white}
            />
          </View>

          <View style={[styles.toolCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
          >
            <Text style={[styles.toolTitle, { color: colors.textMain }]}>Game Theme</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.colorRow}>
              {COLOR_PRESETS.map((color) => (
                <Pressable key={color} style={styles.colorItem} onPress={() => handleSelectColor(color)}>
                  <View
                    style={[
                      styles.colorDot,
                      { backgroundColor: color },
                      selectedColor === color ? styles.colorSelected : null,
                    ]}
                  >
                    {selectedColor === color ? (
                      <IdolDoIcon name="check" size={16} color={colors.white} />
                    ) : null}
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { backgroundColor: colors.background }]}>
        <IdolDoButton
          title="Next: Metadata"
          size="lg"
          onPress={handleNextPress}
          icon={<IdolDoIcon name="arrow-forward" size={20} color={colors.white} />}
          style={styles.bottomButton}
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
    fontSize: 24,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: IdolDoSpacing.sm,
    fontSize: 13,
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: IdolDoSpacing.lg,
    rowGap: IdolDoSpacing.md,
  },
  gridItem: {
    width: '22%',
    aspectRatio: 1,
  },
  filledSlot: {
    flex: 1,
    borderRadius: IdolDoRadius.full,
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  editButton: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 24,
    height: 24,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    ...IdolDoShadow.soft,
  },
  emptySlot: {
    flex: 1,
    borderRadius: IdolDoRadius.full,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  toolsSection: {
    paddingHorizontal: IdolDoSpacing.lg,
    paddingTop: IdolDoSpacing.xl,
    gap: IdolDoSpacing.md,
  },
  toolCard: {
    borderRadius: IdolDoRadius.lg,
    borderWidth: 1,
    padding: IdolDoSpacing.md,
    ...IdolDoShadow.soft,
  },
  toolInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: IdolDoSpacing.md,
    marginBottom: IdolDoSpacing.sm,
  },
  toolIcon: {
    width: 36,
    height: 36,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  toolSubtitle: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
  colorRow: {
    gap: IdolDoSpacing.md,
    paddingTop: IdolDoSpacing.sm,
  },
  colorItem: {
    alignItems: 'center',
  },
  colorDot: {
    width: 36,
    height: 36,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorSelected: {
    borderWidth: 2,
    borderColor: 'white',
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: IdolDoSpacing.lg,
    paddingBottom: IdolDoSpacing.lg,
    paddingTop: IdolDoSpacing.md,
  },
  bottomButton: {
    width: '100%',
  },
});
