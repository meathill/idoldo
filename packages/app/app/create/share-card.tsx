import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { IdolDoButton } from '@/components/idoldo-button';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoTopBar } from '@/components/idoldo-top-bar';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

export default function ShareCardScreen() {
  const router = useRouter();
  const { colors } = useIdolDoTheme();

  function handleClosePress() {
    router.back();
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <IdolDoTopBar
        title="Preview Share Card"
        onBack={handleClosePress}
        right={<IdolDoIcon name="share" size={22} color={colors.textSub} />}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.cardImageWrapper}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT85-ohvpaSoGu8l8gm-ytEkHHSVLX2fH2nn5x5RFf0wGX5jMr93pbUSJr1RgMMbbpwa7LD3H64eV5ZdMWGrV1exJlKSXRwDeQYKADQ-MUZN80Gw3DiGW9NbaoQECssexhCxU0OegsZO6I25frYs00icbgN6RJWrSFO-guzvclbydUoJnTlc97mB_0eQoGPPbu0XtMQPCG0DUhmCYW72aXMQqfDOSGy56DpI2l2jNDY_m7O1QGixZD6yscFmMhmlg88wdlj2Gn5979',
              }}
              style={styles.cardImage}
              contentFit="cover"
            />
            <View style={styles.cardOverlay} />
            <View style={[styles.rankBadge, { backgroundColor: colors.primary }]}
            >
              <IdolDoIcon name="stars" size={14} color={colors.white} />
              <Text style={styles.rankText}>Rank S</Text>
            </View>
            <View style={styles.scoreBadge}>
              <IdolDoIcon name="favorite" size={16} color={colors.primary} />
              <Text style={styles.scoreText}>Score: 99%</Text>
            </View>
          </View>

          <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <View style={[styles.boltIcon, { backgroundColor: colors.primary }]}>
                <IdolDoIcon name="bolt" size={10} color={colors.white} />
              </View>
              <Text style={[styles.cardLabel, { color: colors.textSub }]}>IdolDo Game</Text>
            </View>
            <Text style={[styles.cardTitle, { color: colors.textMain }]}>
              Jennie's{'
'}Love Link
            </Text>
            <View style={styles.cardFooter}>
              <View style={styles.cardMeta}>
                <Text style={[styles.cardMetaText, { color: colors.textSub }]}>Scan to play instantly</Text>
                <Text style={[styles.cardMetaText, { color: colors.primary, fontWeight: '700' }]}>App Clip available</Text>
                <View style={styles.avatarStack}>
                  <View style={styles.avatarDot}>
                    <Image
                      source={{
                        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArVdr6GzhY88fiSgFWoyLlOwTpZSwMRHmZNlL6Ll3K2rP1uz2WpZpdATndbZBOTKOYgS4yS6T_IbrkWocm3o2RAp8y6e1K9MMml3SR-_zwNS_A8bb8auGAX3e5d4d-U3QcVgoDzPucgUyJBXW09ZAaj_nM7oM2iFynLNxVWGfvZ8C6sXe7xq6Ckypg9SkBNdV9by6TzH5-qFgs4IStJeO9wjGxtCkOdzX0dND_UeU9zQJok_o1rE__2cIMxwzDHRS0kNLjzMQj2ZEJ',
                      }}
                      style={styles.avatarImage}
                      contentFit="cover"
                    />
                  </View>
                  <View style={styles.avatarDot}>
                    <Image
                      source={{
                        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVUomdTSH1U-PEyErVv_5Iv3HKIqAO9GWt6k57doUCWLk7kQqk_UuE_mKzJbbNq2MTJAyQbwWxsaAYEbODR-TlXbPYqreg7Nd95UmolqpjzJC93cAj2_tINYFrKybGDTSNxZE6ijHFFJ4AXpu392zYBLIfwBSxm-YzeqMEiNbJBbSlXXa5-nm3zzhMkc6eDxvYrdMATlPBX_2nkDp9SD5a2uonLGlHgzRoWfeu4IXCpnkhq-G2wF7C0g_Ta70lRb5MjYmK5mTTDwqn',
                      }}
                      style={styles.avatarImage}
                      contentFit="cover"
                    />
                  </View>
                  <View style={[styles.avatarDot, styles.avatarCount]}>
                    <Text style={styles.avatarCountText}>+2k</Text>
                  </View>
                </View>
              </View>
              <View style={styles.qrWrapper}>
                <View style={styles.qrInner}>
                  <View style={styles.qrGrid}>
                    <View style={styles.qrBlockLarge} />
                    <View style={styles.qrBlockSmall} />
                    <View style={styles.qrBlockSmall} />
                    <View style={styles.qrBlockSmall} />
                    <View style={styles.qrBlockSmall} />
                    <View style={[styles.qrBlockLarge, { backgroundColor: colors.primary }]} />
                  </View>
                </View>
                <Text style={[styles.qrLabel, { color: colors.textSub }]}>No install needed</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomDock, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <IdolDoButton
          title="Save"
          variant="outline"
          size="sm"
          icon={<IdolDoIcon name="download" size={18} color={colors.textMain} />}
        />
        <IdolDoButton
          title="Share"
          size="sm"
          icon={<IdolDoIcon name="share" size={18} color={colors.white} />}
        />
        <IdolDoButton
          title="Copy Link"
          variant="outline"
          size="sm"
          icon={<IdolDoIcon name="link" size={18} color={colors.textMain} />}
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
    padding: IdolDoSpacing.lg,
    paddingBottom: 140,
  },
  card: {
    borderRadius: IdolDoRadius.lg,
    backgroundColor: 'white',
    overflow: 'hidden',
    ...IdolDoShadow.soft,
  },
  cardImageWrapper: {
    height: 320,
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  rankBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: IdolDoRadius.full,
  },
  rankText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
  scoreBadge: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: IdolDoRadius.md,
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  scoreText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  cardContent: {
    padding: IdolDoSpacing.lg,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: IdolDoSpacing.sm,
  },
  boltIcon: {
    width: 16,
    height: 16,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLabel: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 28,
  },
  cardFooter: {
    marginTop: IdolDoSpacing.md,
    flexDirection: 'row',
    gap: IdolDoSpacing.md,
    justifyContent: 'space-between',
  },
  cardMeta: {
    flex: 1,
    gap: 4,
  },
  cardMetaText: {
    fontSize: 12,
  },
  avatarStack: {
    flexDirection: 'row',
    marginTop: IdolDoSpacing.sm,
  },
  avatarDot: {
    width: 24,
    height: 24,
    borderRadius: IdolDoRadius.full,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
    marginRight: -6,
    backgroundColor: '#e5e7eb',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  avatarCount: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarCountText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#6b7280',
  },
  qrWrapper: {
    alignItems: 'center',
    gap: 4,
  },
  qrInner: {
    padding: 8,
    backgroundColor: '#000',
    borderRadius: IdolDoRadius.md,
  },
  qrGrid: {
    width: 64,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  qrBlockLarge: {
    width: 20,
    height: 20,
    backgroundColor: '#000',
    borderRadius: 4,
  },
  qrBlockSmall: {
    width: 10,
    height: 10,
    backgroundColor: '#000',
    borderRadius: 3,
  },
  qrLabel: {
    fontSize: 10,
    fontWeight: '600',
  },
  bottomDock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: IdolDoSpacing.lg,
    paddingVertical: IdolDoSpacing.md,
    borderTopWidth: 1,
    gap: IdolDoSpacing.sm,
  },
});
