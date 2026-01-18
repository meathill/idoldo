import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { IdolDoButton } from '@/components/idoldo-button';
import { IdolDoChip } from '@/components/idoldo-chip';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoStepper } from '@/components/idoldo-stepper';
import { IdolDoTopBar } from '@/components/idoldo-top-bar';
import { CREATE_STEPS } from '@/constants/create-flow';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

type TemplateCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  tagLabel: string;
  tagColor: string;
  tagIcon: 'local-fire-department' | 'auto-awesome' | 'music-note';
};

const TEMPLATE_LIST: TemplateCard[] = [
  {
    id: 'tile-match',
    title: 'Tile Match',
    description: "Classic match-3 fun. Use your bias's photos as tiles!",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrNvOuPGH2YRNYBb0P7yajFiC6__Vz_YAlnjfHN904xq6q1UygWiNw-0SshrZ9pHkAZ5VcmYkXfJJXhHWxSKEAqqqHlRJY6hyBHE78qLhjQf2DMCSv8gYl8IvaHw6D7xFxhr0MP_gEdSYZe8JKjtVyvTXGxOM9qESQMOebKXrh6xN3ITrgiS4k5S9yCKJJgd1Zau9_nn562ifeIpfFhdmYrUbs5RxI1m8XiMJpWLzp9o30g8m_UG5GREFSh95qdhNkf4rjFaCFxZUf',
    tagLabel: 'Popular',
    tagColor: '#ee2bad',
    tagIcon: 'local-fire-department',
  },
  {
    id: 'merge-idol',
    title: 'Merge Idol',
    description: 'Combine items to unlock rare outfits and accessories.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDkykE66BdA_CIEEjOHP2Kr-MdODQs3l1LMx3-o_2imTR3UkWHgzViQJ-CYtUZGtpu93-S3p1KL44NedqltvcisC3wrv4qeAB_xhHMW9mhPvHXmYwBV_us8jcvHYcRurinTtrk0jOiF405U0TSYp_LOF8GXlaceh9kAnjL7RRfCTaugShQ0VoQAQQ23x_RQlB9NxlD6Qti2bakTGykE8jco02QZSHTeKr3XhELKR4-YjWMHMRfjULiFThn7HdqdhZeWBSKtOBGO6lk',
    tagLabel: 'Casual',
    tagColor: '#6366f1',
    tagIcon: 'auto-awesome',
  },
  {
    id: 'rhythm-tap',
    title: 'Rhythm Tap',
    description: 'Tap to the beat of their top tracks.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBTKz0S3hLy9IAdF_08-uMW21PqZktCSakU1Z1G4JoxPxw24CDiBWEhEsdVQVPQy2K8VQ0ZYVPIp44kh0qwa_F6nkd8JxB5BthArjjC5G-oj4_tTuF9v1Eq-5yU9xKTiYQbknYxpPx3Cq6UpKZHe5rvsJ-u9D3cI4GE41Hu9_XHogRCmq3t0A3OGF5VbJNV2e7fS5LriilckAwWxVfaU7uOyz4V4pW1PD7l2oKth-1FYkquQ8yE0p9mD0EYfop6-oI5SUE0mKuu',
    tagLabel: 'Trending',
    tagColor: '#ec4899',
    tagIcon: 'music-note',
  },
];

const FILTER_LIST = ['All', 'Puzzle', 'Rhythm', 'Action'];

export default function ChooseTemplateScreen() {
  const router = useRouter();
  const { colors } = useIdolDoTheme();

  function handleCreatePress() {
    router.push('/create/upload-assets');
  }

  function handleBackPress() {
    router.back();
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <IdolDoTopBar
        title="Choose Game Template"
        onBack={handleBackPress}
        right={<IdolDoIcon name="help" size={22} color={colors.textSub} />}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <IdolDoStepper steps={CREATE_STEPS} currentStep={0} />

        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.textMain }]}>Choose Game Template</Text>
          <Text style={[styles.subtitle, { color: colors.textSub }]}>Pick a game style to start building your idol's mini-game.</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
          {FILTER_LIST.map((label, index) => (
            <IdolDoChip key={label} label={label} selected={index === 0} />
          ))}
        </ScrollView>

        <View style={styles.cardList}>
          {TEMPLATE_LIST.map((item) => (
            <View key={item.id} style={[styles.card, { backgroundColor: colors.surface }]}
            >
              <View style={styles.cardImageWrapper}>
                <Image source={{ uri: item.image }} style={styles.cardImage} contentFit="cover" />
                <View style={[styles.cardTag, { backgroundColor: 'rgba(0,0,0,0.5)' }]}
                >
                  <IdolDoIcon name={item.tagIcon} size={14} color={item.tagColor} />
                  <Text style={[styles.cardTagText, { color: item.tagColor }]}>{item.tagLabel}</Text>
                </View>
              </View>
              <View style={styles.cardBody}>
                <View style={styles.cardText}>
                  <Text style={[styles.cardTitle, { color: colors.textMain }]}>{item.title}</Text>
                  <Text style={[styles.cardDescription, { color: colors.textSub }]} numberOfLines={2}>
                    {item.description}
                  </Text>
                </View>
                <IdolDoButton title="Create" size="sm" onPress={handleCreatePress} />
              </View>
            </View>
          ))}
        </View>

        <Text style={[styles.footerText, { color: colors.textSub }]}>Suggest a Game Type</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: IdolDoSpacing.xl,
  },
  header: {
    paddingHorizontal: IdolDoSpacing.lg,
    paddingTop: IdolDoSpacing.sm,
    paddingBottom: IdolDoSpacing.md,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: IdolDoSpacing.sm,
  },
  filterRow: {
    paddingHorizontal: IdolDoSpacing.lg,
    paddingBottom: IdolDoSpacing.lg,
    gap: IdolDoSpacing.sm,
  },
  cardList: {
    paddingHorizontal: IdolDoSpacing.lg,
    gap: IdolDoSpacing.lg,
  },
  card: {
    borderRadius: IdolDoRadius.lg,
    padding: IdolDoSpacing.md,
    ...IdolDoShadow.soft,
  },
  cardImageWrapper: {
    height: 180,
    borderRadius: IdolDoRadius.md,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardTag: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: IdolDoRadius.full,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardTagText: {
    fontSize: 12,
    fontWeight: '700',
  },
  cardBody: {
    marginTop: IdolDoSpacing.md,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: IdolDoSpacing.sm,
  },
  cardText: {
    flex: 1,
    paddingRight: IdolDoSpacing.sm,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  cardDescription: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '500',
  },
  footerText: {
    marginTop: IdolDoSpacing.lg,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
  },
});
