import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

type RankingPeriod = 'weekly' | 'all-time';

type PodiumEntry = {
  id: string;
  rank: number;
  name: string;
  score: string;
  avatar: string;
};

type RankingEntry = {
  id: string;
  rank: number;
  name: string;
  score: string;
  games: string;
  avatar: string;
};

const PODIUM_LIST: PodiumEntry[] = [
  {
    id: 'rank-2',
    rank: 2,
    name: 'Mina',
    score: '1.8M',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-Y6JNDlQJYpnSk1dIdDgRnF76b6vZ8rEGrBnbgt46M-Hb9tPsnjzh4gkIJwowKZ3QOUDwJsLCtGeq6ZHr_64w965asajumW043eTr-7WbHMsgs3NdY50Gj7snzLOM-F-X8GfCE6vLMJvc3LYrxN4mnfT4gIM9yopX0O8YBkhxK3-fu3BCJWZ1GPVoZi_Ts4ApaWGqBvL1N_sCFMqu1b_UtZwCefe2YJWZ7VfNYwUQx8dAs3e8Zc33eWRnGJJaJ3TvMuiLL5d8q50u',
  },
  {
    id: 'rank-1',
    rank: 1,
    name: 'Jennie Kim',
    score: '2.4M',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDrrgDKIoFApZQwnrq3W1D3Ltk3r_zTJPEcxx0ixOYekd2sxnMff9NrXiNal-2IGqX29zfmEm6cUnnUyPYAZdWOTY2eJ4M8gstA-2_HciUKHF5Ij_ZcGw8wkEi6g5xgDntORxmc-j99G3dbqzzmZveWYE_OI5Id2ctAXq609erc_qJ6HifuXkVgls3Qf7QS0kiompI41OLUW1Va22BJsvwnqNeYYGGoXAJe-M38OHdtC4kUiVLXjQBsHZf5Li7AyHw1rFpan0fBuL2n',
  },
  {
    id: 'rank-3',
    rank: 3,
    name: 'Lisa',
    score: '1.5M',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPAYGs1t2aTjm0TZ_szXmrviaCXN6utlE4O-EM6CvxBy7yO3aVU7Bkonr_ph9n6l7NazkCiQd4QNIwys0rZOU0tEjXV6GMfySWoy9xc18qj6Z0r0zaRDuQhpiuWcVNDLmLEpCmx94IDwvR0MTVleFkS2xLVv19keYZEHq98wENeHZJ20lYF5U6z92SA6wX7tXJsNkeWUGit9TovDUofZK3vntIaUoCKxDW6zNAYixoGgBG3946LbeM14OqQ3_pm82Cy7sG3r3OkpLx',
  },
];

const RANKING_LIST: RankingEntry[] = [
  {
    id: 'rank-4',
    rank: 4,
    name: 'Roseanne',
    score: '982k',
    games: '42',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA71psspRWgVDmlYK1kag4PWL41zLzGXphcep1-QIpXiyuN6hXEgIt6ScxP0IC-22eEKIILEXb4GQrqqzyUm0xAmoT800kJ3TzRGcVW8uEnHjJ4_SMk7m8BjYhLTCQgjnXVZfS34JWYJX5oTdSnv0hTpHiEW522lVd3MDCg3_m7gp4pL_Peqxv3Td2pqwTHl_axjS7wsZOCB_wnFWIDyQmT17krPhZy_xGtpcw30sGgX109ry5ZxYijfCpV-qT3rS3CvvUkFStkLMZR',
  },
  {
    id: 'rank-5',
    rank: 5,
    name: 'Kim Taehyung',
    score: '845k',
    games: '89',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvqm6xoHbJF83oM1hDPy4_Xf4WvFQATtnLakPESbWjwhtFcC0lI_FSGbNskgLnXqvvQtr76o5LrORZ7Es7ozOFh74Icp5bZGqOy0g8P2GLKN1r9543xvKDKIXxgMLEl3Qu-WeLhvqNmIXAoeBjNpti-z59uNW1b54sPIfSa2XhsvRlabD8N-xTFBqcxgcvsmonjZUN6ykLWkAUUSdHCN8f2kFrcS95H-t26SltdtS9DczNQyyngpmwK1s3f2vDbBTkOyHifJbHskxa',
  },
  {
    id: 'rank-6',
    rank: 6,
    name: 'Jungkook',
    score: '790k',
    games: '73',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9j18c9NzDazwcgH6qR958ijkpuy1R-zhQj6Ivaywmbl8EHxEy52zpHjQRLTHj697l1z6DDgcOD4tzLcJh1dU05SKjKOmLqgydUUjSvcy4qekeUXAQHXegs8R_283hr_0A6Jum6wIN6YDHhENRb88YiYUO-SHFSEK3nbLb6DLj6l-YQDQYAxsHs4GctazK9DsXhnbMPpvzK-kbBiBqpAAxeoeaw8TedRlPI0aUruC8QVyTsAJRpOjzQzovqprzai1roNVv9xSLcygp',
  },
];

export default function RankingsScreen() {
  const { colors } = useIdolDoTheme();
  const [period, setPeriod] = useState<RankingPeriod>('weekly');

  function handlePeriodChange(nextPeriod: RankingPeriod) {
    setPeriod(nextPeriod);
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <IdolDoIcon name="stars" size={20} color={colors.primary} />
          <Text style={[styles.brandText, { color: colors.textMain }]}>IdolDo</Text>
        </View>
        <Text style={[styles.title, { color: colors.textMain }]}>Idol Support Rankings</Text>
      </View>

      <View style={[styles.segmented, { backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}>
        <Pressable
          style={[
            styles.segmentButton,
            period === 'weekly' ? { backgroundColor: colors.primary } : null,
          ]}
          onPress={() => handlePeriodChange('weekly')}
        >
          <Text style={[styles.segmentText, { color: period === 'weekly' ? colors.white : colors.textSub }]}>
            Weekly
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.segmentButton,
            period === 'all-time' ? { backgroundColor: colors.primary } : null,
          ]}
          onPress={() => handlePeriodChange('all-time')}
        >
          <Text style={[styles.segmentText, { color: period === 'all-time' ? colors.white : colors.textSub }]}>
            All-Time
          </Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.podiumRow}>
          {PODIUM_LIST.map((entry) => (
            <View key={entry.id} style={[styles.podiumCard, entry.rank === 1 ? styles.podiumCenter : null]}>
              <View style={[styles.podiumAvatarWrap, entry.rank === 1 ? styles.podiumAvatarMain : null]}>
                <Image source={{ uri: entry.avatar }} style={styles.podiumAvatar} contentFit="cover" />
              </View>
              <View style={[styles.rankBadge, { backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}>
                <Text style={[styles.rankBadgeText, { color: colors.textMain }]}>{entry.rank}</Text>
              </View>
              <Text style={[styles.podiumName, { color: colors.textMain }]} numberOfLines={1}>
                {entry.name}
              </Text>
              <View style={styles.scoreRow}>
                <IdolDoIcon name="favorite" size={14} color={colors.primary} />
                <Text style={[styles.scoreText, { color: colors.primary }]}>{entry.score}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.listCard}>
          {RANKING_LIST.map((entry) => (
            <View key={entry.id} style={[styles.listRow, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={[styles.listRank, { color: colors.textMuted }]}>{entry.rank}</Text>
              <Image source={{ uri: entry.avatar }} style={styles.listAvatar} contentFit="cover" />
              <View style={styles.listInfo}>
                <Text style={[styles.listName, { color: colors.textMain }]} numberOfLines={1}>
                  {entry.name}
                </Text>
                <View style={styles.listMeta}>
                  <View style={styles.metaItem}>
                    <IdolDoIcon name="favorite" size={12} color={colors.primary} />
                    <Text style={[styles.metaText, { color: colors.textSub }]}>{entry.score}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <IdolDoIcon name="sports-esports" size={12} color={colors.textMuted} />
                    <Text style={[styles.metaText, { color: colors.textSub }]}>{entry.games}</Text>
                  </View>
                </View>
              </View>
              <Pressable style={[styles.supportButton, { backgroundColor: colors.primary }]}>
                <Text style={styles.supportText}>Support</Text>
              </Pressable>
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
  header: {
    paddingTop: IdolDoSpacing.lg,
    paddingHorizontal: IdolDoSpacing.lg,
    paddingBottom: IdolDoSpacing.sm,
    gap: 6,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  brandText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  segmented: {
    marginHorizontal: IdolDoSpacing.lg,
    marginBottom: IdolDoSpacing.lg,
    borderRadius: IdolDoRadius.full,
    borderWidth: 1,
    padding: 4,
    flexDirection: 'row',
    gap: 6,
  },
  segmentButton: {
    flex: 1,
    borderRadius: IdolDoRadius.full,
    paddingVertical: 8,
    alignItems: 'center',
  },
  segmentText: {
    fontSize: 12,
    fontWeight: '700',
  },
  scrollContent: {
    paddingBottom: IdolDoSpacing.xxl,
  },
  podiumRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: IdolDoSpacing.lg,
    paddingBottom: IdolDoSpacing.lg,
  },
  podiumCard: {
    alignItems: 'center',
    flex: 1,
    gap: 6,
  },
  podiumCenter: {
    transform: [{ scale: 1.08 }],
  },
  podiumAvatarWrap: {
    width: 64,
    height: 64,
    borderRadius: IdolDoRadius.full,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#e5e7eb',
    ...IdolDoShadow.soft,
  },
  podiumAvatarMain: {
    width: 76,
    height: 76,
    borderColor: '#facc15',
  },
  podiumAvatar: {
    width: '100%',
    height: '100%',
  },
  rankBadge: {
    marginTop: -12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: IdolDoRadius.full,
    borderWidth: 1,
  },
  rankBadgeText: {
    fontSize: 12,
    fontWeight: '800',
  },
  podiumName: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  scoreText: {
    fontSize: 11,
    fontWeight: '700',
  },
  listCard: {
    paddingHorizontal: IdolDoSpacing.lg,
    gap: IdolDoSpacing.sm,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: IdolDoRadius.lg,
    borderWidth: 1,
    padding: IdolDoSpacing.sm,
    gap: IdolDoSpacing.sm,
    ...IdolDoShadow.soft,
  },
  listRank: {
    width: 24,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
  },
  listAvatar: {
    width: 44,
    height: 44,
    borderRadius: IdolDoRadius.full,
  },
  listInfo: {
    flex: 1,
    gap: 4,
  },
  listName: {
    fontSize: 14,
    fontWeight: '700',
  },
  listMeta: {
    flexDirection: 'row',
    gap: IdolDoSpacing.sm,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    fontWeight: '600',
  },
  supportButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: IdolDoRadius.full,
  },
  supportText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
});
