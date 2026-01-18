import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { IdolDoChip } from '@/components/idoldo-chip';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoButton } from '@/components/idoldo-button';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

const FILTERS = ['Most Popular', 'Newest', 'Hard Mode', 'Trivia'];

const GAME_CARDS = [
  {
    id: 'dance',
    title: 'Lisa Dance Challenge 2024',
    plays: '12k',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD59qa3w1ni0Aww1WsRq-2-AMPKH-BJYxpaGp_7O2w1AVXcV7MzqcslwYP8npa5ldgP4a1c9tlPbSI4UunV7cknJMqD7FjRABwpgJDWQajFqG-UugR8wkz_G0ujaUwrwxfkwbVhhdnDdq75blmxGrDvsYqqK4RST8nfo1RXuqGLQQ0-nMsgIIsI-l3NHZeJ3cjy6weADHRxF12lsf7AqKmfDhYpaEgVv9UrquHPuQvkUj5EFs8br2uJ7RFNwu16B5ZZbvA-ryGbyadB',
    user: '@Blink123',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKPQYGGnshlq3scPUFtwz22Wa9qzqFoV9eX8dSQzvBkTlFvc4Eu2YCeAkSP6XEVTVUcoaP1VwaTEEcXiVHSCtaab0xYWUgGLCu6VGysS-ObN2wbl5k7iKq0uBbb8CtKreuwjP27YUDZGef-RlL2Lie8DXqf9D1IWhHm0F6JYrnRGbvXL_QQ6iixmgGMiDxKhFTzF_nEZroh90eVR6XzCNkTTbd1VGsT4UGbUubDF7oW58yUsd6YgSU4qwL1fwH5OYtZsB4RoUWWASu',
  },
  {
    id: 'runway',
    title: 'Runway Style Match',
    plays: '8.4k',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoyuYeESd8aE-gZ7epRTqREdiU0Qhi-pErRNOg48ksFIWaIWrUemFaA04_eiyodax0mrgRDw80REjtpCK99WkQHWloECxEcwPznQCGqBahW1YBZ4PBSX5T2-gtP0okovOZHElYr6iLtRoTIHQ3gJJWowyTRFI3p9wJclmcFXozF8A1HkmtjSo-BnF7kmdR1DsJeCJZtsUK2CIFk0AtdnZCPG176cZma_sJmp71qN4HiRELcSE51g-Wam9trJ0YPsdn5TQsYcyqU9ie',
    user: '@RunwayFan',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBafX3UFxmjAJ2bBLL9067eOuHtM76UYX8y6ojRDXeARtuXhisjYMbuKjro7F4ZwpJ9Jo7AeGmJ5xdJ3MOrCxryS99rbZQuCZGAVFzzMkb9QH6y9yAv_WCoq0rRR1YGEMlQF0b6DrkHfmzmUQPTrpolMAwGWXSZRV6zaaA80tfYEuFWXcInFWuyf8OSQmkYtBRqSDif_UBSFVFByf0Yogl6T2TU7Y72NaYyYapP0Z3BH_7iFsmjC1KVD86PU6HkuTJiQhYDBYd_ex3_',
  },
];

export default function SearchScreen() {
  const { colors } = useIdolDoTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.hero}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq0u7lEpsjyo5QRdIVoA8F46khCeahOCI5ZwFmWz-triAsluAmDBxPkCf9Rk5lefC7-1A0f5oDGecg37mRa72ggw1bEshKgEIUA7iOvGrTBLRkQImZhN1zus72h2RjKx0qZPUgiTHqxSsi6j2tvfEMYdMk6qAiSAOMdpkq_FYTEt4sYPeaThk6uHa6BUEN9sb-N0v89S0en7HuXZG-nO1YuSdu9ABD7BZRyKXbPt3xYJFZXnuPRnvqQFk9fVVtEJdLHtKRCjkb-yxF',
            }}
            style={styles.heroImage}
            contentFit="cover"
          />
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <View style={styles.heroTop}>
              <View>
                <Text style={styles.heroTitle}>LISA</Text>
                <View style={styles.heroBadge}>
                  <IdolDoIcon name="verified" size={16} color={colors.primary} />
                  <Text style={styles.heroBadgeText}>Official Idol Topic</Text>
                </View>
              </View>
              <IdolDoButton title="Follow" size="sm" icon={<IdolDoIcon name="favorite" size={16} color={colors.white} />} />
            </View>
            <View style={styles.progressRow}>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { backgroundColor: colors.primary }]} />
              </View>
              <Text style={[styles.progressText, { color: colors.primary }]}>1.2M Support Points</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: colors.surface }]}>
            <IdolDoIcon name="sports-esports" size={18} color={colors.textSub} />
            <Text style={[styles.statLabel, { color: colors.textSub }]}>Total Games</Text>
            <Text style={[styles.statValue, { color: colors.textMain }]}>342</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.surface }]}>
            <IdolDoIcon name="group" size={18} color={colors.textSub} />
            <Text style={[styles.statLabel, { color: colors.textSub }]}>Active Fans</Text>
            <Text style={[styles.statValue, { color: colors.textMain }]}>58k</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
          {FILTERS.map((label, index) => (
            <IdolDoChip key={label} label={label} selected={index === 0} />
          ))}
        </ScrollView>

        <View style={styles.grid}>
          {GAME_CARDS.map((card) => (
            <View key={card.id} style={[styles.gridCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <View style={styles.gridImageWrapper}>
                <Image source={{ uri: card.image }} style={styles.gridImage} contentFit="cover" />
                <View style={styles.gridBadge}>
                  <IdolDoIcon name="play-arrow" size={12} color={colors.primary} />
                  <Text style={styles.gridBadgeText}>{card.plays}</Text>
                </View>
              </View>
              <View style={styles.gridBody}>
                <Text style={[styles.gridTitle, { color: colors.textMain }]} numberOfLines={2}>
                  {card.title}
                </Text>
                <View style={styles.gridFooter}>
                  <Image source={{ uri: card.avatar }} style={styles.avatar} contentFit="cover" />
                  <Text style={[styles.avatarName, { color: colors.textSub }]}>{card.user}</Text>
                </View>
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
    paddingBottom: IdolDoSpacing.xl,
  },
  hero: {
    height: 420,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  heroContent: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
  },
  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  heroTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: '800',
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  heroBadgeText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 12,
    fontWeight: '600',
  },
  progressRow: {
    marginTop: IdolDoSpacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: IdolDoSpacing.sm,
  },
  progressTrack: {
    flex: 1,
    height: 6,
    borderRadius: IdolDoRadius.full,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  progressFill: {
    width: '75%',
    height: '100%',
    borderRadius: IdolDoRadius.full,
  },
  progressText: {
    fontSize: 11,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    gap: IdolDoSpacing.sm,
    paddingHorizontal: IdolDoSpacing.lg,
    marginTop: -20,
  },
  statCard: {
    flex: 1,
    padding: IdolDoSpacing.md,
    borderRadius: IdolDoRadius.lg,
    alignItems: 'flex-start',
    gap: 4,
    ...IdolDoShadow.soft,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
  },
  filterRow: {
    paddingHorizontal: IdolDoSpacing.lg,
    paddingVertical: IdolDoSpacing.lg,
    gap: IdolDoSpacing.sm,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: IdolDoSpacing.lg,
    gap: IdolDoSpacing.md,
  },
  gridCard: {
    width: '48%',
    borderRadius: IdolDoRadius.lg,
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  gridImageWrapper: {
    width: '100%',
    aspectRatio: 4 / 5,
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  gridBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: IdolDoRadius.full,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  gridBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
  },
  gridBody: {
    padding: IdolDoSpacing.sm,
  },
  gridTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: IdolDoSpacing.sm,
  },
  gridFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: IdolDoRadius.full,
  },
  avatarName: {
    fontSize: 11,
    fontWeight: '600',
  },
});
