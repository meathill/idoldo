import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

const STUDIO_GAMES = [
  {
    id: 'dream-date',
    title: 'Dream Date Mini-Game',
    status: 'Draft · 2 days ago',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDT85-ohvpaSoGu8l8gm-ytEkHHSVLX2fH2nn5x5RFf0wGX5jMr93pbUSJr1RgMMbbpwa7LD3H64eV5ZdMWGrV1exJlKSXRwDeQYKADQ-MUZN80Gw3DiGW9NbaoQECssexhCxU0OegsZO6I25frYs00icbgN6RJWrSFO-guzvclbydUoJnTlc97mB_0eQoGPPbu0XtMQPCG0DUhmCYW72aXMQqfDOSGy56DpI2l2jNDY_m7O1QGixZD6yscFmMhmlg88wdlj2Gn5979',
  },
  {
    id: 'love-link',
    title: "Jennie's Love Link",
    status: 'Published · 9.8k plays',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpQ_raEsZFTs8KuBq0FIqoVufngmj5jWcn-QdN7RtXicNYSBnWBBYj--px-TcnRjtR4cFfPiFVKPDTtVzcZL9npBRMIP3IPELiRtaLkfQZv0ajoFKxxKblN0ewNTWlqHTgLnPBMUf_IgmxLhc7HmXvYY6riOq4VGkg2aJiJdcM4y2LCkyXiDRbpJxvrIxu9Gna_nYyTJKt0st2kjsaFCqJQ2n4XGk2B7o8DVXwrzKAIHu-v2BFJRi-QUlWGxOvGRHGgYgxKl5LTvPI',
  },
];

export default function ProfileScreen() {
  const { colors } = useIdolDoTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBafX3UFxmjAJ2bBLL9067eOuHtM76UYX8y6ojRDXeARtuXhisjYMbuKjro7F4ZwpJ9Jo7AeGmJ5xdJ3MOrCxryS99rbZQuCZGAVFzzMkb9QH6y9yAv_WCoq0rRR1YGEMlQF0b6DrkHfmzmUQPTrpolMAwGWXSZRV6zaaA80tfYEuFWXcInFWuyf8OSQmkYtBRqSDif_UBSFVFByf0Yogl6T2TU7Y72NaYyYapP0Z3BH_7iFsmjC1KVD86PU6HkuTJiQhYDBYd_ex3_',
            }}
            style={styles.avatar}
            contentFit="cover"
          />
          <View>
            <Text style={[styles.name, { color: colors.textMain }]}>Jennie Studio</Text>
            <Text style={[styles.subtitle, { color: colors.textSub }]}>Creator · 12 games</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: colors.surface }]}>
            <IdolDoIcon name="favorite" size={20} color={colors.primary} />
            <Text style={[styles.statValue, { color: colors.textMain }]}>128k</Text>
            <Text style={[styles.statLabel, { color: colors.textSub }]}>Likes</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.surface }]}>
            <IdolDoIcon name="sports-esports" size={20} color={colors.primary} />
            <Text style={[styles.statValue, { color: colors.textMain }]}>54k</Text>
            <Text style={[styles.statLabel, { color: colors.textSub }]}>Plays</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.surface }]}>
            <IdolDoIcon name="emoji-events" size={20} color={colors.primary} />
            <Text style={[styles.statValue, { color: colors.textMain }]}>23</Text>
            <Text style={[styles.statLabel, { color: colors.textSub }]}>Awards</Text>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { color: colors.textMain }]}>My Studio</Text>
        <View style={styles.list}>
          {STUDIO_GAMES.map((game) => (
            <View key={game.id} style={[styles.card, { backgroundColor: colors.surface }]}>
              <Image source={{ uri: game.image }} style={styles.cardImage} contentFit="cover" />
              <View style={styles.cardBody}>
                <Text style={[styles.cardTitle, { color: colors.textMain }]} numberOfLines={2}>
                  {game.title}
                </Text>
                <Text style={[styles.cardStatus, { color: colors.textSub }]}>{game.status}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: IdolDoSpacing.lg,
    paddingTop: IdolDoSpacing.lg,
    paddingBottom: IdolDoSpacing.xl,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: IdolDoSpacing.md,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: IdolDoRadius.full,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '500',
  },
  statsRow: {
    flexDirection: 'row',
    gap: IdolDoSpacing.sm,
    marginTop: IdolDoSpacing.lg,
  },
  statCard: {
    flex: 1,
    borderRadius: IdolDoRadius.lg,
    padding: IdolDoSpacing.md,
    alignItems: 'center',
    gap: 6,
    ...IdolDoShadow.soft,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '800',
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: IdolDoSpacing.xl,
    marginBottom: IdolDoSpacing.md,
  },
  list: {
    gap: IdolDoSpacing.md,
  },
  card: {
    borderRadius: IdolDoRadius.lg,
    overflow: 'hidden',
    ...IdolDoShadow.soft,
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardBody: {
    padding: IdolDoSpacing.md,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: IdolDoSpacing.xs,
  },
  cardStatus: {
    fontSize: 12,
    fontWeight: '500',
  },
});
