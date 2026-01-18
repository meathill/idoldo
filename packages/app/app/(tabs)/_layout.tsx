import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';

import { HapticTab } from '@/components/haptic-tab';
import { IdolDoIcon } from '@/components/idoldo-icon';
import { IdolDoRadius, IdolDoShadow, IdolDoSpacing } from '@/constants/idoldo-theme';
import { useIdolDoTheme } from '@/hooks/use-idoldo-theme';

function CreateTabButton({ onPress, accessibilityState }: BottomTabBarButtonProps) {
  const { colors } = useIdolDoTheme();
  const isSelected = accessibilityState?.selected ?? false;

  function handlePress() {
    if (process.env.EXPO_OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress?.();
  }

  return (
    <View style={styles.createButtonWrapper}>
      <Pressable
        onPress={handlePress}
        accessibilityRole="button"
        style={[styles.createButton, { backgroundColor: colors.primary }]}
      >
        <IdolDoIcon name="add" size={28} color={colors.white} />
      </Pressable>
      <Text style={[styles.createLabel, { color: isSelected ? colors.primary : colors.textMuted }]}>Create</Text>
    </View>
  );
}

export default function TabLayout() {
  const { colors } = useIdolDoTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 76,
          paddingBottom: IdolDoSpacing.sm,
          paddingTop: IdolDoSpacing.xs,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Discovery',
          tabBarIcon: ({ color }) => (
            <IdolDoIcon name="explore" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <IdolDoIcon name="search" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarButton: CreateTabButton,
        }}
      />
      <Tabs.Screen
        name="rankings"
        options={{
          title: 'Rankings',
          tabBarIcon: ({ color }) => (
            <IdolDoIcon name="leaderboard" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Me',
          tabBarIcon: ({ color }) => (
            <IdolDoIcon name="person" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my-games"
        options={{ href: null }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  createButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 90,
    marginTop: -IdolDoSpacing.md,
  },
  createButton: {
    width: 56,
    height: 56,
    borderRadius: IdolDoRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    ...IdolDoShadow.glow,
  },
  createLabel: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: '700',
  },
});
