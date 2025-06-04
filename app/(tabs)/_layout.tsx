import { Tabs } from 'expo-router';
import { MapPin, ShoppingBag, Dumbbell, Heart, Trophy, Compass, Calendar } from 'lucide-react-native';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        headerShown: true,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, size }) => <MapPin color={color} size={size} />,
          headerTitle: 'Sports Locations',
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color, size }) => <ShoppingBag color={color} size={size} />,
          headerTitle: 'Sports Marketplace',
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          title: 'Train',
          tabBarIcon: ({ color, size }) => <Dumbbell color={color} size={size} />,
          headerTitle: 'Workouts & Training',
        }}
      />
      <Tabs.Screen
        name="health"
        options={{
          title: 'Health',
          tabBarIcon: ({ color, size }) => <Heart color={color} size={size} />,
          headerTitle: 'Health & Recovery',
        }}
      />
      <Tabs.Screen
        name="tournaments"
        options={{
          title: 'Compete',
          tabBarIcon: ({ color, size }) => <Trophy color={color} size={size} />,
          headerTitle: 'Tournaments & Competitions',
        }}
      />
      <Tabs.Screen
        name="tourism"
        options={{
          title: 'Travel',
          tabBarIcon: ({ color, size }) => <Compass color={color} size={size} />,
          headerTitle: 'Sports Tourism',
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          tabBarIcon: ({ color, size }) => <Calendar color={color} size={size} />,
          headerTitle: 'Events & Activities',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  header: {
    backgroundColor: '#000000',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});