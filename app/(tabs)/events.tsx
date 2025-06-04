import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import EventCard from '@/components/EventCard';
import CategoryFilter from '@/components/CategoryFilter';

const EVENTS = [
  {
    id: '1',
    title: 'NBA Finals Game 3',
    type: 'Basketball',
    date: 'June 15, 2025',
    location: 'Madison Square Garden',
    time: '8:00 PM - 11:00 PM',
    image: 'https://avatars.mds.yandex.net/i?id=cb0452c3e0ed4a03d5eb5842fd138d00_l-5875539-images-thumbs&n=13',
    category: 'Sports',
  },
  {
    id: '2',
    title: 'Fitness Expo 2025',
    type: 'Exhibition',
    date: 'May 22-24, 2025',
    location: 'Convention Center',
    time: '10:00 AM - 6:00 PM',
    image: 'https://static.wixstatic.com/media/765183_36f7cfa8932043bfb32cc67f97bc359b~mv2_d_3300_1429_s_2.jpg/v1/fit/w_2500,h_1330,al_c/765183_36f7cfa8932043bfb32cc67f97bc359b~mv2_d_3300_1429_s_2.jpg',
    category: 'Expo',
  },
  {
    id: '3',
    title: 'Charity 5K Run',
    type: 'Running',
    date: 'April 30, 2025',
    location: 'Central Park',
    time: '9:00 AM - 12:00 PM',
    image: 'https://media.zenfs.com/en/the_independent_635/2a2462870480406d9cb286f7a425c8b8',
    category: 'Charity',
  },
  {
    id: '4',
    title: 'Soccer World Cup Qualifier',
    type: 'Soccer',
    date: 'July 8, 2025',
    location: 'National Stadium',
    time: '7:30 PM - 9:30 PM',
    image: 'https://t4.ftcdn.net/jpg/05/16/33/41/360_F_516334139_cXbDaEWQ4msiTVXHSTmxiMrPBRhpLYsi.jpg',
    category: 'Sports',
  },
  {
    id: '5',
    title: 'Wellness Festival',
    type: 'Festival',
    date: 'August 5-7, 2025',
    location: 'Beach Resort',
    time: 'All day',
    image: 'https://sun9-22.userapi.com/impf/JGLdY0rjzQCnStoiymhS662LAIxlEgSyaE3pDg/y6T6D4iyYys.jpg?size=1920x768&quality=95&crop=0,0,1918,766&sign=a541923f870dc8f76958df623f31d04b&type=cover_group',
    category: 'Festival',
  },
];

const CATEGORIES = ['All', 'Sports', 'Expo', 'Charity', 'Festival', 'Concert'];

export default function EventsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = selectedCategory === 'All'
    ? EVENTS
    : EVENTS.filter(event => 
        event.category === selectedCategory
      );

  const handleEventPress = (id: string) => {
    console.log(`Viewing details for event with ID: ${id}`);
  };

  const handleRegister = (id: string) => {
    console.log(`Registering for event with ID: ${id}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <View style={styles.listContainer}>
        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventCard
              title={item.title}
              type={item.type}
              date={item.date}
              location={item.location}
              time={item.time}
              image={item.image}
              onPress={() => handleEventPress(item.id)}
              onRegister={() => handleRegister(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No events found for this category.</Text>
              <Text style={styles.emptySubtext}>Try selecting a different category.</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
});