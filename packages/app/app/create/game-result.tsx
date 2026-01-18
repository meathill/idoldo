import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { IdolDoButton } from '@/components/idoldo-button';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoTopBar } from '@/components/idoldo-top-bar';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

type LeaderboardEntry = {
  id: string;
  name: string;
  score: string;
  avatar: string;
};

const LEADERBOARD: LeaderboardEntry[] = [
  {
    id: 'user-1',
    name: 'User123',
    score: '9,900',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAl4UBi23qQQI5-8LiVMcp2gUMMFh5rByKqQPz-3dcxrSmVr5fBMrtWj6WDJnbi4TmKKN2E2wr0gmsn95yWDGWJwt4ivx-rTcAn3D4UnhZStGbKrj5qGTmyU4C5zb-Zc5EM6AYs0jA3MkaZFbMFQjWAZr2pj5c_o0U8q2dtyysBhAk42q5m_bAajSp0hGNx49qxXI-bAiBeiSaN8G59etmUYY1hBmuUfIIVx5_L2Q4ipYnAP39KQgEZOqtEr2ewj0b13gb_KyZqqyn',
  },
  {
    id: 'user-2',
    name: 'FanGirl_01',
    score: '9,890',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSYot486d4dSieJIUULSgL7Zi3bxuU6k7P5HvWBbtNOGPNJhXEfLRkQ00gHdKC0DY65m2YRtxQ-gWad3Eih0LpIUk4o4pqubQecRp4tDnqd4ugGe7-UOhz_tp5d6fU1nZz4tZPN--eg9o3rhQ_n0O_UKozr_rfp1DLPVTxkayAGqT1YCQKK-oESiZPii1ErNmYDaKBs5CFyFurQfchHtSUlJq0hI7zXYctHBbzdS4BbtIUBubWbuY877Z0WGGdEFmOmOjglCmGy_AT',
  },
  {
    id: 'user-3',
    name: 'KpopLover',
    score: '9,880',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCg-i2eJ0PbmEEO25jhzCjtIu54Rw1reYNVqKdGRum8j_sb6pyJo8-WbJNVG6wpnmXQ9krM5QulrfQpGI7X1ksBvuv5rdCeybO4gmZvXsME7Ng8FvaCy5u1yUO3GfNcw8iUYioCHg-R8hbW9rcc3WD0JkoQcXluziv5xk0CFAoRKABBOUXtgV9pwKMsbd4xXNp-Akf6gIe3OMDZAmPqjq8me8rHR4y9DksCN-Uc4BabfKx9mKgLTQZaAadwFOqbYie78nk_81TgmXCT',
  },
];

export default function GameResultScreen() {
  const router = useRouter();
  const { colors } = useIdolDoTheme();

  function handleBackPress() {
    router.back();
  }

  function handleSharePress() {
    router.push('/create/share-card');
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <IdolDoTopBar
        title="Game Result"
        onBack={handleBackPress}
        right={<IdolDoIcon name="close" size={22} color={colors.textSub} />}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbJg7L1_81QTi31detf8xAokw0yGV8TP2YmOXoTMi4oso2ZtHPLfoPtqXnsqfHASPufoXrSgT3KOkEafCoHjlMXjpYQ3PfzI3JO1xlyxW2jjYc5JygK85nXDGkVm3-yOouILDhIHk9l0MBF25L_K8EDJJN1eKb5djKA6bliwGfEZNvqA4u8pAASw9KTEPXEnEQfRtBzkIz13pFJX-gEKeAjlJ8Yfm9Lfio7DHl9aRn0h-dalOEyOn5BSyRJhJfJdG5bK9w0CZPzsz6',
            }}
            style={styles.heroImage}
            contentFit="cover"
          />
          <View style={styles.heroOverlay} />
          <View style={styles.heroText}>
            <Text style={styles.heroKicker}>Mission Accomplished!</Text>
            <Text style={styles.heroTitle}>You know Lisa so well!</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: colors.surface }]}>
            <IdolDoIcon name="stars" size={24} color={colors.primary} />
            <Text style={[styles.statValue, { color: colors.primary }]}>9,850</Text>
            <Text style={[styles.statLabel, { color: colors.textSub }]}>Score</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.surface }]}>
            <IdolDoIcon name="timer" size={24} color={colors.primary} />
            <Text style={[styles.statValue, { color: colors.textMain }]}>01:24</Text>
            <Text style={[styles.statLabel, { color: colors.textSub }]}>Time</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.primary }]}>
            <IdolDoIcon name="trending-up" size={24} color={colors.white} />
            <Text style={[styles.statValue, { color: colors.white }]}>Top 5%</Text>
            <Text style={[styles.statLabel, { color: 'rgba(255,255,255,0.8)' }]}>Fan Rank</Text>
          </View>
        </View>

        <View style={styles.leaderboardHeader}>
          <Text style={[styles.leaderboardTitle, { color: colors.textMain }]}>Top Fans Today</Text>
          <Text style={[styles.linkText, { color: colors.primary }]}>View All</Text>
        </View>
        <View style={styles.leaderboardList}>
          {LEADERBOARD.map((entry, index) => (
            <View key={entry.id} style={[styles.leaderboardItem, { backgroundColor: colors.surface }]}>
              <View style={styles.rankBadge}>
                <Text style={[styles.rankText, { color: colors.primary }]}>{index + 1}</Text>
              </View>
              <Image source={{ uri: entry.avatar }} style={styles.leaderboardAvatar} contentFit="cover" />
              <Text style={[styles.leaderboardName, { color: colors.textMain }]}>{entry.name}</Text>
              <Text style={[styles.leaderboardScore, { color: colors.primary }]}>{entry.score}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { backgroundColor: colors.background }]}>
        <IdolDoButton
          title="Share Results"
          size="lg"
          onPress={handleSharePress}
          icon={<IdolDoIcon name="share" size={18} color={colors.white} />}
        />
        <IdolDoButton title="Play Again" variant="ghost" size="sm" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: IdolDoSpacing.lg,
    paddingBottom: 140,
  },
  heroCard: {
    height: 360,
    borderRadius: IdolDoRadius.lg,
    overflow: 'hidden',
    marginBottom: IdolDoSpacing.lg,
    ...IdolDoShadow.soft,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  heroText: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  heroKicker: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  heroTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    gap: IdolDoSpacing.sm,
    marginBottom: IdolDoSpacing.lg,
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
    fontSize: 18,
    fontWeight: '800',
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  leaderboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: IdolDoSpacing.sm,
  },
  leaderboardTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  linkText: {
    fontSize: 13,
    fontWeight: '700',
  },
  leaderboardList: {
    gap: IdolDoSpacing.sm,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: IdolDoRadius.lg,
    padding: IdolDoSpacing.sm,
    gap: IdolDoSpacing.sm,
    ...IdolDoShadow.soft,
  },
  rankBadge: {
    width: 28,
    height: 28,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(238,43,173,0.12)',
  },
  rankText: {
    fontSize: 12,
    fontWeight: '700',
  },
  leaderboardAvatar: {
    width: 36,
    height: 36,
    borderRadius: IdolDoRadius.full,
  },
  leaderboardName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
  },
  leaderboardScore: {
    fontSize: 16,
    fontWeight: '800',
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
});
