import { fireEvent, render } from '@testing-library/react-native';

import { IdolDoButton } from '@/components/idoldo-button';

function renderButton(onPress?: () => void) {
  return render(<IdolDoButton title="Create" onPress={onPress} />);
}

describe('IdolDoButton', () => {
  it('renders button title', () => {
    const { getByText } = renderButton();

    expect(getByText('Create')).toBeTruthy();
  });

  it('calls onPress when tapped', () => {
    const onPress = jest.fn();
    const { getByText } = renderButton(onPress);

    fireEvent.press(getByText('Create'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
