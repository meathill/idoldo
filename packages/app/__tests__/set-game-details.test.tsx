import { fireEvent, render } from '@testing-library/react-native';

import SetGameDetailsScreen from '@/app/create/set-game-details';

const mockRouter = {
  push: jest.fn(),
  back: jest.fn(),
};

jest.mock('expo-router', () => ({
  useRouter: () => mockRouter,
}));

describe('SetGameDetailsScreen', () => {
  beforeEach(() => {
    mockRouter.push.mockClear();
    mockRouter.back.mockClear();
  });

  it('renders core fields', () => {
    const { getAllByText, getByText, getByPlaceholderText } = render(<SetGameDetailsScreen />);

    expect(getAllByText('Metadata').length).toBeGreaterThan(0);
    expect(getByText('Game Name')).toBeTruthy();
    expect(getByText('Cover Photo')).toBeTruthy();
    expect(getByText('Description / Greeting')).toBeTruthy();
    expect(getByText('Privacy')).toBeTruthy();
    expect(getByPlaceholderText('My Favorite Idol Match')).toBeTruthy();
  });

  it('navigates to advanced config on next', () => {
    const { getByText } = render(<SetGameDetailsScreen />);

    fireEvent.press(getByText('Next: Configs'));

    expect(mockRouter.push).toHaveBeenCalledWith('/create/game-settings');
  });
});
