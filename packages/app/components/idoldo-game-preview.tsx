import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

type PreviewItem = {
  id: string;
  type: 'photo' | 'star';
  uri?: string;
};

type IdolDoGamePreviewProps = {
  width?: number;
  height?: number;
};

const PREVIEW_ITEMS: PreviewItem[] = [
  {
    id: 'p1',
    type: 'photo',
    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSYot486d4dSieJIUULSgL7Zi3bxuU6k7P5HvWBbtNOGPNJhXEfLRkQ00gHdKC0DY65m2YRtxQ-gWad3Eih0LpIUk4o4pqubQecRp4tDnqd4ugGe7-UOhz_tp5d6fU1nZz4tZPN--eg9o3rhQ_n0O_UKozr_rfp1DLPVTxkayAGqT1YCQKK-oESiZPii1ErNmYDaKBs5CFyFurQfchHtSUlJq0hI7zXYctHBbzdS4BbtIUBubWbuY877Z0WGGdEFmOmOjglCmGy_AT',
  },
  { id: 's1', type: 'star' },
  { id: 's2', type: 'star' },
  {
    id: 'p2',
    type: 'photo',
    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg-i2eJ0PbmEEO25jhzCjtIu54Rw1reYNVqKdGRum8j_sb6pyJo8-WbJNVG6wpnmXQ9krM5QulrfQpGI7X1ksBvuv5rdCeybO4gmZvXsME7Ng8FvaCy5u1yUO3GfNcw8iUYioCHg-R8hbW9rcc3WD0JkoQcXluziv5xk0CFAoRKABBOUXtgV9pwKMsbd4xXNp-Akf6gIe3OMDZAmPqjq8me8rHR4y9DksCN-Uc4BabfKx9mKgLTQZaAadwFOqbYie78nk_81TgmXCT',
  },
  { id: 's3', type: 'star' },
  {
    id: 'p3',
    type: 'photo',
    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZj71CnKm4l5C62zR5mNVJnfzU_Tub-xO7NlZBWGy_GyVAUYSI5RBXiwL-pKzB6jKhZSX-eg7J4-pqXzpz3YB-L6gciYF0Gh0o3R1hsRQo9jysj17-VKIGb0BaGJugrXPwQQLS5QQ-bQMoYeSsfQ0WA4_H_yVyH-A2sN3ATphBJYuwJlfEgRerx3h3yrlqO-rwochPBRujf3ugDyB1CypmKMlQct-KnzDRT7AhG33oRgSwokMBP3hY5AuLADqnsQkXGI3iAdTfneCw',
  },
  {
    id: 'p4',
    type: 'photo',
    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZj71CnKm4l5C62zR5mNVJnfzU_Tub-xO7NlZBWGy_GyVAUYSI5RBXiwL-pKzB6jKhZSX-eg7J4-pqXzpz3YB-L6gciYF0Gh0o3R1hsRQo9jysj17-VKIGb0BaGJugrXPwQQLS5QQ-bQMoYeSsfQ0WA4_H_yVyH-A2sN3ATphBJYuwJlfEgRerx3h3yrlqO-rwochPBRujf3ugDyB1CypmKMlQct-KnzDRT7AhG33oRgSwokMBP3hY5AuLADqnsQkXGI3iAdTfneCw',
  },
  { id: 's4', type: 'star' },
  { id: 's5', type: 'star' },
  {
    id: 'p5',
    type: 'photo',
    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAl4UBi23qQQI5-8LiVMcp2gUMMFh5rByKqQPz-3dcxrSmVr5fBMrtWj6WDJnbi4TmKKN2E2wr0gmsn95yWDGWJwt4ivx-rTcAn3D4UnhZStGbKrj5qGTmyU4C5zb-Zc5EM6AYs0jA3MkaZFbMFQjWAZr2pj5c_o0U8q2dtyysBhAk42q5m_bAajSp0hGNx49qxXI-bAiBeiSaN8G59etmUYY1hBmuUfIIVx5_L2Q4ipYnAP39KQgEZOqtEr2ewj0b13gb_KyZqqyn',
  },
  { id: 's6', type: 'star' },
  { id: 's7', type: 'star' },
  {
    id: 'p6',
    type: 'photo',
    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSYot486d4dSieJIUULSgL7Zi3bxuU6k7P5HvWBbtNOGPNJhXEfLRkQ00gHdKC0DY65m2YRtxQ-gWad3Eih0LpIUk4o4pqubQecRp4tDnqd4ugGe7-UOhz_tp5d6fU1nZz4tZPN--eg9o3rhQ_n0O_UKozr_rfp1DLPVTxkayAGqT1YCQKK-oESiZPii1ErNmYDaKBs5CFyFurQfchHtSUlJq0hI7zXYctHBbzdS4BbtIUBubWbuY877Z0WGGdEFmOmOjglCmGy_AT',
  },
  { id: 's8', type: 'star' },
  {
    id: 'p7',
    type: 'photo',
    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg-i2eJ0PbmEEO25jhzCjtIu54Rw1reYNVqKdGRum8j_sb6pyJo8-WbJNVG6wpnmXQ9krM5QulrfQpGI7X1ksBvuv5rdCeybO4gmZvXsME7Ng8FvaCy5u1yUO3GfNcw8iUYioCHg-R8hbW9rcc3WD0JkoQcXluziv5xk0CFAoRKABBOUXtgV9pwKMsbd4xXNp-Akf6gIe3OMDZAmPqjq8me8rHR4y9DksCN-Uc4BabfKx9mKgLTQZaAadwFOqbYie78nk_81TgmXCT',
  },
  { id: 's9', type: 'star' },
];

export function IdolDoGamePreview({ width = 280, height = 520 }: IdolDoGamePreviewProps) {
  const { colors } = useIdolDoTheme();
  const notchWidth = Math.min(width * 0.42, 120);

  return (
    <View style={[styles.phoneFrame, { width, height }]}>
      <View style={[styles.phoneNotch, { width: notchWidth, marginLeft: -(notchWidth / 2) }]} />
      <View style={styles.phoneScreen}>
        <View style={[styles.phoneHeader, { backgroundColor: 'rgba(255,255,255,0.8)' }]}>
          <View style={styles.avatarBlock}>
            <View style={[styles.avatarIcon, { borderColor: colors.primary }]}>
              <IdolDoIcon
                name="face"
                size={18}
                color={colors.primary}
              />
            </View>
            <View>
              <Text style={styles.avatarLabel}>My Idol</Text>
              <Text style={[styles.avatarLevel, { color: colors.primary }]}>Level 5</Text>
            </View>
          </View>
          <View style={styles.timerPill}>
            <IdolDoIcon
              name="favorite"
              size={14}
              color={colors.primary}
            />
            <Text style={[styles.timerText, { color: colors.primary }]}>00:45</Text>
          </View>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { backgroundColor: colors.primary }]} />
        </View>

        <View style={styles.grid}>
          {PREVIEW_ITEMS.map((item) => (
            <View
              key={item.id}
              style={styles.gridCell}>
              {item.type === 'photo' && item.uri ? (
                <Image
                  source={{ uri: item.uri }}
                  style={styles.gridImage}
                  contentFit="cover"
                />
              ) : (
                <View style={[styles.starCell, { backgroundColor: colors.primary }]}>
                  <IdolDoIcon
                    name="star"
                    size={18}
                    color={colors.white}
                  />
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.phoneControls}>
          <View style={styles.controlButton}>
            <IdolDoIcon
              name="emoji-objects"
              size={18}
              color="#f59e0b"
            />
            <Text style={styles.controlLabel}>Hint</Text>
          </View>
          <View style={styles.loveButton}>
            <IdolDoIcon
              name="favorite"
              size={24}
              color={colors.white}
            />
            <Text style={styles.loveText}>Send Love</Text>
          </View>
          <View style={styles.controlButton}>
            <IdolDoIcon
              name="campaign"
              size={18}
              color="#3b82f6"
            />
            <Text style={styles.controlLabel}>Shuffle</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneFrame: {
    borderRadius: 40,
    backgroundColor: '#000',
    padding: 6,
    ...IdolDoShadow.soft,
  },
  phoneNotch: {
    position: 'absolute',
    top: 6,
    left: '50%',
    height: 24,
    borderRadius: IdolDoRadius.full,
    backgroundColor: '#000',
    zIndex: 2,
  },
  phoneScreen: {
    flex: 1,
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: '#fdf2f8',
  },
  phoneHeader: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarIcon: {
    width: 32,
    height: 32,
    borderRadius: IdolDoRadius.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  avatarLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4b5563',
  },
  avatarLevel: {
    fontSize: 9,
    fontWeight: '600',
  },
  timerPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: IdolDoRadius.full,
    borderWidth: 1,
    borderColor: '#f9a8d4',
  },
  timerText: {
    fontSize: 10,
    fontWeight: '700',
  },
  progressTrack: {
    height: 6,
    marginHorizontal: 16,
    borderRadius: IdolDoRadius.full,
    backgroundColor: 'rgba(255,255,255,0.8)',
    overflow: 'hidden',
    marginBottom: IdolDoSpacing.md,
  },
  progressFill: {
    width: '70%',
    height: '100%',
    borderRadius: IdolDoRadius.full,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    rowGap: 8,
  },
  gridCell: {
    width: '22%',
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  starCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneControls: {
    marginTop: IdolDoSpacing.lg,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  controlButton: {
    alignItems: 'center',
    gap: 4,
  },
  controlLabel: {
    fontSize: 9,
    fontWeight: '700',
    color: '#6b7280',
    textTransform: 'uppercase',
  },
  loveButton: {
    alignItems: 'center',
    gap: 6,
  },
  loveText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#ee2bad',
    backgroundColor: 'rgba(255,255,255,0.85)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: IdolDoRadius.full,
  },
});
