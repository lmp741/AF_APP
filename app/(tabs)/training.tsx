import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import TrainingCard from '@/components/TrainingCard';
import CategoryFilter from '@/components/CategoryFilter';

// Mock data for training sessions
const TRAINING_SESSIONS = [
  {
    id: '1',
    title: 'High Intensity Interval Training',
    type: 'Group Workout',
    trainer: 'Alex Johnson',
    schedule: 'Mon, Wed, Fri - 6:00 PM',
    duration: '45 minutes',
    participants: '12-15 people',
    image: 'https://avatars.mds.yandex.net/i?id=8cd55f887b54c77fc92f59dab1ddd0de_l-4949466-images-thumbs&n=13',
    category: 'Group',
  },
  {
    id: '2',
    title: 'Personal Strength Training',
    type: 'Personal Training',
    trainer: 'Sarah Williams',
    schedule: 'By appointment',
    duration: '60 minutes',
    participants: '1-on-1 session',
    image: 'https://i.pinimg.com/736x/4c/39/d7/4c39d7abdf2912d828f4c80059d090d5.jpg',
    category: 'Personal',
  },
  {
    id: '3',
    title: 'Yoga for Athletes',
    type: 'Group Workout',
    trainer: 'Michael Chen',
    schedule: 'Tue, Thu - 7:30 AM',
    duration: '60 minutes',
    participants: '8-10 people',
    image: 'https://i.pinimg.com/736x/8b/3f/d1/8b3fd12ddfcf0fd24987b4c34cada140.jpg',
    category: 'Group',
  },
  {
    id: '4',
    title: 'Marathon Training Program',
    type: 'Professional Program',
    trainer: 'Diane Foster',
    schedule: 'Sat - 6:30 AM',
    duration: '90 minutes',
    participants: '6-8 people',
    image: 'https://www.all-about-marathon-training.com/images/12WeekHalfMarathonPanIG.png',
    category: 'Program',
  },
  {
    id: '5',
    title: 'Swimming Technique',
    type: 'Personal Training',
    trainer: 'Robert Hayes',
    schedule: 'By appointment',
    duration: '45 minutes',
    participants: '1-on-1 session',
    image: 'https://image.winudf.com/v2/image1/Y29tLnN3aW1taW5ndGVjaG5pcXVlc2lkZWEubF9zY3JlZW5fMF8xNTUxOTk4MTEyXzA5Nw/screen-0.jpg?fakeurl=1&type=.jpg',
    category: 'Personal',
  },
];

// Categories for filtering
const CATEGORIES = ['All', 'Group', 'Personal', 'Program', 'Online'];

export default function TrainingScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter training sessions based on selected category
  const filteredSessions = selectedCategory === 'All'
    ? TRAINING_SESSIONS
    : TRAINING_SESSIONS.filter(session => 
        session.category === selectedCategory
      );

  const handleBooking = (id: string) => {
    // In a real app, this would navigate to a booking screen or open a booking modal
    console.log(`Booking training session with ID: ${id}`);
  };

  const handleSessionPress = (id: string) => {
    // In a real app, this would navigate to a session detail screen
    console.log(`Viewing details for training session with ID: ${id}`);
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
          data={filteredSessions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TrainingCard
              title={item.title}
              type={item.type}
              trainer={item.trainer}
              schedule={item.schedule}
              duration={item.duration}
              participants={item.participants}
              image={item.image}
              onPress={() => handleSessionPress(item.id)}
              onBook={() => handleBooking(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No training sessions found for this category.</Text>
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