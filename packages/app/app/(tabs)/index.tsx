import { Image } from 'expo-image';
import { useMemo } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { IdolDoChip } from '@/components/idoldo-chip';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoRadius, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

type TrendingItem = {
  id: string;
  title: string;
  plays: string;
  image: string;
  badge?: string;
};

type FreshItem = {
  id: string;
  title: string;
  type: string;
  likes: string;
  user: string;
  image: string;
  avatar: string;
};

const CATEGORY_LIST = ['All', 'K-Pop', 'C-Pop', 'Thai', 'Actors', 'Retro'];

const TRENDING_ITEMS: TrendingItem[] = [
  {
    id: 'jennie-fashion',
    title: "Jennie's Fashion Match-3",
    plays: '12k Plays',
    badge: 'Trending #1',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpQ_raEsZFTs8KuBq0FIqoVufngmj5jWcn-QdN7RtXicNYSBnWBBYj--px-TcnRjtR4cFfPiFVKPDTtVzcZL9npBRMIP3IPELiRtaLkfQZv0ajoFKxxKblN0ewNTWlqHTgLnPBMUf_IgmxLhc7HmXvYY6riOq4VGkg2aJiJdcM4y2LCkyXiDRbpJxvrIxu9Gna_nYyTJKt0st2kjsaFCqJQ2n4XGk2B7o8DVXwrzKAIHu-v2BFJRi-QUlWGxOvGRHGgYgxKl5LTvPI',
  },
  {
    id: 'xiao-zhan-sudoku',
    title: 'Xiao Zhan Sudoku',
    plays: '8.5k Plays',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgv64UCdYFGai4dX1V0DHN1xkJb484l0VCULUtjPoLXZPZJOFd_VwbIW0UVNe-Z3z-0E-EW1AE36HxrjrGEbIAPNOkN5-dGKepYvNXYQUVRhwhwb1ybXKWVIuSBFM5zS-35MAeDFF2jy8nljFJAwhPY7oYlnTGpyHZ2wm1Pkh57uNq2sWH7J2zg_KlmfSAB2_A7JB0EuqilXUdksiuN-F28P3Vlh70fjDiETLUuDKj1I9x64q618xJ8JDC0tTkxx5IyD6Mfh0ICJ6f',
  },
  {
    id: 'bts-rhythm',
    title: 'BTS Rhythm Master',
    plays: '15k Plays',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBO2FBzlrhGe1yEEnYKHPGO1xN4u7R7EKqFm4faFqOKbSUUDHRuIJqHmouc0dLAkIMrRAjnT_UmyYRe12uW_3FDrzq-hXWZApGavIScEcWDIwcgTxDNB0NyZU62AZZ4ukFcb0W2cRNAZYJmH2pRv-YRiddNLLyzqOBFddr7DhtZIfO8LagtlG_jN1cvooLF35wFI0gAtcKIOw77k2SWr3L-cCCIzCXo7NjIWlOpj9Oh9D80aB6Zk6q4-HO0jbFIXI14oEu-JMU8Zzic',
  },
];

const FRESH_ITEMS: FreshItem[] = [
  {
    id: 'mv-quiz',
    title: 'Guess the MV from one pixel!',
    type: 'QUIZ',
    likes: '234',
    user: 'ArmyLuv',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiYj1V1KLxOi8lVuqhAlv6psGB4u2dWc3NGygA2sTWh5jaJULn1FfYYoizluOz1NicgicV2Br5dItJE76fTGu8nrSIjK7lZhewI6cT1IvTaJt5LnLZ9asET6-G9lSlCHuFw4AdbmKD9kNn3AzrFMdwyqslzit6K_RXCRVabIzn8F711vLbol-Oz-DwH8nhuFlu6u4H_ykNUMwWmqYKlze7b5DfksDdqSHFFUgrNFDrLIZvE2ctav4DExs4HuTtV3lurX8sanJ1Zw09',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7rve9iM3mMbx1OZjr-RHnAXKp83rTQwRHnw2DdeUnv8L5WS8eU2guPKRwmkyOIeyZHyCkgRQPmfawZv1P2YjNcJNGRysqOhsUHafABwY-ZhGKUOkpa2VTIehlmey0ig34AiWkdSTTYMBAkmC9juIluLB90BWmlrV52CMKApBta0izUv8VXXNRIAaFREbsX5j4D-thnI2pp7EcD6ITmupBScdySltGjhqBXlGZDRFW2v_3akHwWHEJQjuc__H6jv6pHTeKrRGNmQT4',
  },
  {
    id: 'cat-cafe',
    title: "Lisa's Cat Cafe Manager",
    type: 'PUZZLE',
    likes: '1.2k',
    user: 'Blink99',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoyuYeESd8aE-gZ7epRTqREdiU0Qhi-pErRNOg48ksFIWaIWrUemFaA04_eiyodax0mrgRDw80REjtpCK99WkQHWloECxEcwPznQCGqBahW1YBZ4PBSX5T2-gtP0okovOZHElYr6iLtRoTIHQ3gJJWowyTRFI3p9wJclmcFXozF8A1HkmtjSo-BnF7kmdR1DsJeCJZtsUK2CIFk0AtdnZCPG176cZma_sJmp71qN4HiRELcSE51g-Wam9trJ0YPsdn5TQsYcyqU9ie',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBafX3UFxmjAJ2bBLL9067eOuHtM76UYX8y6ojRDXeARtuXhisjYMbuKjro7F4ZwpJ9Jo7AeGmJ5xdJ3MOrCxryS99rbZQuCZGAVFzzMkb9QH6y9yAv_WCoq0rRR1YGEMlQF0b6DrkHfmzmUQPTrpolMAwGWXSZRV6zaaA80tfYEuFWXcInFWuyf8OSQmkYtBRqSDif_UBSFVFByf0Yogl6T2TU7Y72NaYyYapP0Z3BH_7iFsmjC1KVD86PU6HkuTJiQhYDBYd_ex3_',
  },
  {
    id: 'airport-fashion',
    title: 'Airport Fashion: Find the Look',
    type: 'STYLE',
    likes: '812',
    user: 'FashionLine',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoyuYeESd8aE-gZ7epRTqREdiU0Qhi-pErRNOg48ksFIWaIWrUemFaA04_eiyodax0mrgRDw80REjtpCK99WkQHWloECxEcwPznQCGqBahW1YBZ4PBSX5T2-gtP0okovOZHElYr6iLtRoTIHQ3gJJWowyTRFI3p9wJclmcFXozF8A1HkmtjSo-BnF7kmdR1DsJeCJZtsUK2CIFk0AtdnZCPG176cZma_sJmp71qN4HiRELcSE51g-Wam9trJ0YPsdn5TQsYcyqU9ie',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBafX3UFxmjAJ2bBLL9067eOuHtM76UYX8y6ojRDXeARtuXhisjYMbuKjro7F4ZwpJ9Jo7AeGmJ5xdJ3MOrCxryS99rbZQuCZGAVFzzMkb9QH6y9yAv_WCoq0rRR1YGEMlQF0b6DrkHfmzmUQPTrpolMAwGWXSZRV6zaaA80tfYEuFWXcInFWuyf8OSQmkYtBRqSDif_UBSFVFByf0Yogl6T2TU7Y72NaYyYapP0Z3BH_7iFsmjC1KVD86PU6HkuTJiQhYDBYd_ex3_',
  },
  {
    id: 'lightstick',
    title: 'Lightstick Rush',
    type: 'ARCADE',
    likes: '1.7k',
    user: 'NeonPop',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiYj1V1KLxOi8lVuqhAlv6psGB4u2dWc3NGygA2sTWh5jaJULn1FfYYoizluOz1NicgicV2Br5dItJE76fTGu8nrSIjK7lZhewI6cT1IvTaJt5LnLZ9asET6-G9lSlCHuFw4AdbmKD9kNn3AzrFMdwyqslzit6K_RXCRVabIzn8F711vLbol-Oz-DwH8nhuFlu6u4H_ykNUMwWmqYKlze7b5DfksDdqSHFFUgrNFDrLIZvE2ctav4DExs4HuTtV3lurX8sanJ1Zw09',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7rve9iM3mMbx1OZjr-RHnAXKp83rTQwRHnw2DdeUnv8L5WS8eU2guPKRwmkyOIeyZHyCkgRQPmfawZv1P2YjNcJNGRysqOhsUHafABwY-ZhGKUOkpa2VTIehlmey0ig34AiWkdSTTYMBAkmC9juIluLB90BWmlrV52CMKApBta0izUv8VXXNRIAaFREbsX5j4D-thnI2pp7EcD6ITmupBScdySltGjhqBXlGZDRFW2v_3akHwWHEJQjuc__H6jv6pHTeKrRGNmQT4',
  },
];

export default function HomeScreen() {
  const { colors } = useIdolDoTheme();
  const categories = useMemo(() => CATEGORY_LIST, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Text style={[styles.brand, { color: colors.textMain }]}>IdolDo</Text>
          <Pressable style={[styles.iconCircle, { backgroundColor: colors.surface }]}>
            <IdolDoIcon name="notifications" size={22} color={colors.textMain} />
          </Pressable>
        </View>

        <View style={styles.searchBarWrapper}>
          <View style={[styles.searchBar, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <IdolDoIcon name="search" size={22} color={colors.primary} />
            <TextInput
              style={[styles.searchInput, { color: colors.textMain }]}
              placeholder="Search for Jennie, BTS, Xiao Zhan..."
              placeholderTextColor={colors.textSub}
            />
            <IdolDoIcon name="mic" size={20} color={colors.textSub} />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
          {categories.map((label, index) => (
            <IdolDoChip key={label} label={label} selected={index === 0} />
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.textMain }]}>Hot Right Now 🔥</Text>
          <Pressable>
            <Text style={[styles.linkText, { color: colors.primary }]}>See All</Text>
          </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.trendingRow}>
          {TRENDING_ITEMS.map((item) => (
            <View key={item.id} style={styles.trendingCard}>
              <Image source={{ uri: item.image }} style={styles.trendingImage} contentFit="cover" />
              <View style={styles.trendingOverlay} />
              <View style={styles.trendingContent}>
                {item.badge ? (
                  <View style={[styles.badge, { backgroundColor: colors.primary }]}
                  >
                    <Text style={styles.badgeText}>{item.badge}</Text>
                  </View>
                ) : null}
                <Text style={styles.trendingTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <View style={styles.trendingMeta}>
                  <IdolDoIcon name="play-arrow" size={16} color={colors.primary} />
                  <Text style={styles.trendingPlays}>{item.plays}</Text>
                </View>
              </View>
              <Pressable style={styles.favoriteButton}>
                <IdolDoIcon name="favorite" size={18} color="white" />
              </Pressable>
            </View>
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.textMain }]}>Fresh from Fans ✨</Text>
          <IdolDoIcon name="tune" size={22} color={colors.textSub} />
        </View>
        <View style={styles.grid}>
          {FRESH_ITEMS.map((item) => (
            <View key={item.id} style={[styles.gridCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <View style={styles.gridImageWrapper}>
                <Image source={{ uri: item.image }} style={styles.gridImage} contentFit="cover" />
                <View style={styles.gridTag}>
                  <Text style={styles.gridTagText}>{item.type}</Text>
                </View>
              </View>
              <View style={styles.gridBody}>
                <Text style={[styles.gridTitle, { color: colors.textMain }]} numberOfLines={2}>
                  {item.title}
                </Text>
                <View style={styles.gridMeta}>
                  <View style={styles.avatarRow}>
                    <Image source={{ uri: item.avatar }} style={styles.avatar} contentFit="cover" />
                    <Text style={[styles.avatarName, { color: colors.textSub }]} numberOfLines={1}>
                      {item.user}
                    </Text>
                  </View>
                  <View style={styles.likeRow}>
                    <IdolDoIcon name="favorite" size={14} color={colors.textSub} />
                    <Text style={[styles.likeText, { color: colors.textSub }]}>{item.likes}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: IdolDoSpacing.lg,
    paddingTop: IdolDoSpacing.sm,
  },
  brand: {
    fontSize: 26,
    fontWeight: '800',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarWrapper: {
    paddingHorizontal: IdolDoSpacing.lg,
    paddingTop: IdolDoSpacing.sm,
  },
  searchBar: {
    height: 48,
    borderRadius: IdolDoRadius.full,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: IdolDoSpacing.md,
    gap: IdolDoSpacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
  },
  chipRow: {
    paddingHorizontal: IdolDoSpacing.lg,
    paddingVertical: IdolDoSpacing.md,
    gap: IdolDoSpacing.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: IdolDoSpacing.lg,
    paddingBottom: IdolDoSpacing.md,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  linkText: {
    fontSize: 14,
    fontWeight: '700',
  },
  trendingRow: {
    paddingHorizontal: IdolDoSpacing.lg,
    gap: IdolDoSpacing.md,
    paddingBottom: IdolDoSpacing.lg,
  },
  trendingCard: {
    width: 280,
    height: 320,
    borderRadius: IdolDoRadius.xl,
    overflow: 'hidden',
  },
  trendingImage: {
    ...StyleSheet.absoluteFillObject,
  },
  trendingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  trendingContent: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: IdolDoRadius.full,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  badgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
  trendingTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  trendingMeta: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  trendingPlays: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    fontWeight: '600',
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: IdolDoSpacing.lg,
  },
  gridCard: {
    width: '48%',
    borderRadius: IdolDoRadius.md,
    borderWidth: 1,
    marginBottom: IdolDoSpacing.md,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  gridImageWrapper: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  gridTag: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: IdolDoRadius.full,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  gridTagText: {
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
    marginBottom: IdolDoSpacing.xs,
  },
  gridMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: IdolDoRadius.full,
  },
  avatarName: {
    fontSize: 11,
    fontWeight: '500',
    flexShrink: 1,
  },
  likeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  likeText: {
    fontSize: 11,
    fontWeight: '600',
  },
});
