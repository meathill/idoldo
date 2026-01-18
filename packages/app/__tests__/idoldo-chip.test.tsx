import { fireEvent, render } from '@testing-library/react-native';

import { IdolDoChip } from '@/components/idoldo-chip';

function renderChip(onPress?: () => void) {
  return render(<IdolDoChip label="All" selected onPress={onPress} />);
}

describe('IdolDoChip', () => {
  it('renders chip label', () => {
    const { getByText } = renderChip();

    expect(getByText('All')).toBeTruthy();
  });

  it('fires onPress when tapped', () => {
    const onPress = jest.fn();
    const { getByText } = renderChip(onPress);

    fireEvent.press(getByText('All'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
