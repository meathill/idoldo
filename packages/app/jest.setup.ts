import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => ({}), { virtual: true });

jest.mock('expo-image', () => {
  const { Image } = require('react-native');
  return { Image };
});

jest.mock('@expo/vector-icons/MaterialIcons', () => {
  const React = require('react');
  const { Text } = require('react-native');

  function MaterialIcons({ name }: { name?: string }) {
    return React.createElement(Text, null, name ?? '');
  }

  return MaterialIcons;
});
