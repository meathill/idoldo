import { IdolDoColors } from '@/constants/idoldo-theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export type IdolDoThemeMode = keyof typeof IdolDoColors;

export function useIdolDoTheme() {
  const scheme = useColorScheme() ?? 'light';
  return { scheme, colors: IdolDoColors[scheme] };
}
