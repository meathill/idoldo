import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

const MY_GAMES = [
  {
    id: 'match-3',
    title: "Jennie's Fashion Match-3",
    progress: 'Level 12 • 01:30',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpQ_raEsZFTs8KuBq0FIqoVufngmj5jWcn-QdN7RtXicNYSBnWBBYj--px-TcnRjtR4cFfPiFVKPDTtVzcZL9npBRMIP3IPELiRtaLkfQZv0ajoFKxxKblN0ewNTWlqHTgLnPBMUf_IgmxLhc7HmXvYY6riOq4VGkg2aJiJdcM4y2LCkyXiDRbpJxvrIxu9Gna_nYyTJKt0st2kjsaFCqJQ2n4XGk2B7o8DVXwrzKAIHu-v2BFJRi-QUlWGxOvGRHGgYgxKl5LTvPI',
  },
  {
    id: 'rhythm',
    title: 'BTS Rhythm Master',
    progress: 'Level 8 • 00:58',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBO2FBzlrhGe1yEEnYKHPGO1xN4u7R7EKqFm4faFqOKbSUUDHRuIJqHmouc0dLAkIMrRAjnT_UmyYRe12uW_3FDrzq-hXWZApGavIScEcWDIwcgTxDNB0NyZU62AZZ4ukFcb0W2cRNAZYJmH2pRv-YRiddNLLyzqOBFddr7DhtZIfO8LagtlG_jN1cvooLF35wFI0gAtcKIOw77k2SWr3L-cCCIzCXo7NjIWlOpj9Oh9D80aB6Zk6q4-HO0jbFIXI14oEu-JMU8Zzic',
  },
];

export default function MyGamesScreen() {
  const { colors } = useIdolDoTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: colors.textMain }]}>My Games</Text>
        <Text style={[styles.subtitle, { color: colors.textSub }]}>Continue where you left off</Text>

        <View style={styles.list}>
          {MY_GAMES.map((game) => (
            <View key={game.id} style={[styles.card, { backgroundColor: colors.surface }]}>
              <Image source={{ uri: game.image }} style={styles.cardImage} contentFit="cover" />
              <View style={styles.cardBody}>
                <Text style={[styles.cardTitle, { color: colors.textMain }]} numberOfLines={2}>
                  {game.title}
                </Text>
                <View style={styles.cardMeta}>
                  <IdolDoIcon name="timer" size={14} color={colors.primary} />
                  <Text style={[styles.cardMetaText, { color: colors.textSub }]}>{game.progress}</Text>
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
    paddingHorizontal: IdolDoSpacing.lg,
    paddingTop: IdolDoSpacing.lg,
    paddingBottom: IdolDoSpacing.xl,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
  },
  subtitle: {
    marginTop: IdolDoSpacing.xs,
    fontSize: 13,
    fontWeight: '500',
  },
  list: {
    marginTop: IdolDoSpacing.lg,
    gap: IdolDoSpacing.md,
  },
  card: {
    borderRadius: IdolDoRadius.lg,
    overflow: 'hidden',
    ...IdolDoShadow.soft,
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardBody: {
    padding: IdolDoSpacing.md,
    gap: IdolDoSpacing.sm,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardMetaText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
