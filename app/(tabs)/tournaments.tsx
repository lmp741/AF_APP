import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import EventCard from '@/components/EventCard';
import CategoryFilter from '@/components/CategoryFilter';
import { CirclePlus as PlusCircle } from 'lucide-react-native';

// Mock data for tournaments
const TOURNAMENTS = [
  {
    id: '1',
    title: 'City Marathon Championship',
    type: 'Professional',
    date: 'May 15, 2025',
    location: 'Central Park',
    time: '7:00 AM - 2:00 PM',
    image: 'https://cdn.mos.cms.futurecdn.net/NyobrJFch6GrQZyUuJgPp3.jpg',
    category: 'Professional',
  },
  {
    id: '2',
    title: 'Weekend Football Tournament',
    type: 'Amateur',
    date: 'April 23-24, 2025',
    location: 'Riverside Fields',
    time: '9:00 AM - 6:00 PM',
    image: 'https://sun9-86.userapi.com/impg/3w_nWtNafN7C7pWncX9DqypwT1eUCpwWyGkxgQ/tQzp1insWdc.jpg?size=1280x853&quality=95&sign=d296caf69aac5e808f33d9606163f34a&c_uniq_tag=hWltxQuHXNxpjGnR7DPJe-C2sNAy4l7DJqvrBpBy08Q&type=album',
    category: 'Amateur',
  },
  {
    id: '3',
    title: 'Regional Swimming Competition',
    type: 'Professional',
    date: 'June 8, 2025',
    location: 'Olympic Pool Center',
    time: '10:00 AM - 4:00 PM',
    image: 'https://avatars.mds.yandex.net/i?id=ea60a7310a13115567cdfe0968510a6a_l-6998621-images-thumbs&n=13',
    category: 'Professional',
  },
  {
    id: '4',
    title: 'Community Basketball League',
    type: 'Amateur',
    date: 'Starting May 5, 2025',
    location: 'Downtown Sports Center',
    time: 'Weekends, 1:00 PM - 6:00 PM',
    image: 'https://avatars.mds.yandex.net/i?id=3397d3cd5c17be6154c1940422627063_l-12323207-images-thumbs&n=13',
    category: 'Amateur',
  },
  {
    id: '5',
    title: 'Corporate Tennis Challenge',
    type: 'Corporate',
    date: 'July 12-13, 2025',
    location: 'National Tennis Center',
    time: '9:00 AM - 5:00 PM',
    image: 'https://avatars.mds.yandex.net/i?id=b00cef43209f4481328bc7e103f11146_l-7019255-images-thumbs&n=13',
    category: 'Corporate',
  },
];

// Categories for filtering
const CATEGORIES = ['All', 'Professional', 'Amateur', 'Corporate'];

export default function TournamentsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter tournaments based on selected category
  const filteredTournaments = selectedCategory === 'All'
    ? TOURNAMENTS
    : TOURNAMENTS.filter(tournament => 
        tournament.category === selectedCategory
      );

  const handleTournamentPress = (id: string) => {
    // In a real app, this would navigate to a tournament detail screen
    console.log(`Viewing details for tournament with ID: ${id}`);
  };

  const handleRegister = (id: string) => {
    // In a real app, this would open a registration form
    console.log(`Registering for tournament with ID: ${id}`);
  };

  const handleCreateTournament = () => {
    // In a real app, this would navigate to a tournament creation screen
    console.log('Creating a new tournament');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.createButton}
        onPress={handleCreateTournament}
        activeOpacity={0.8}
      >
        <PlusCircle color="white" size={20} />
        <Text style={styles.createButtonText}>Create Tournament</Text>
      </TouchableOpacity>
      
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <View style={styles.listContainer}>
        <FlatList
          data={filteredTournaments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventCard
              title={item.title}
              type={item.type}
              date={item.date}
              location={item.location}
              time={item.time}
              image={item.image}
              onPress={() => handleTournamentPress(item.id)}
              onRegister={() => handleRegister(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No tournaments found for this category.</Text>
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
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0066CC',
    paddingVertical: 12,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  createButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 8,
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