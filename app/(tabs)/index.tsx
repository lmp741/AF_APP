import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import SportLocationCard from '@/components/SportLocationCard';
import CategoryFilter from '@/components/CategoryFilter';
import MapComponent from '@/components/Map';

// Mock data for sports locations
const SPORTS_LOCATIONS = [
  {
    id: '1',
    name: 'Central Fitness Center',
    type: 'Gym',
    address: '123 Main Street, City Center',
    rating: 4.5,
    image: 'https://p0.zoon.ru/c/8/4ef393e1f89c601d0c000036_5be5a89025d14.jpg',
    categories: ['Gym', 'Indoor'],
    latitude: 55.751244,
    longitude: 37.573856
  },
  {
    id: '2',
    name: 'City Stadium',
    type: 'Football Field',
    address: '456 Sports Avenue, Downtown',
    rating: 4.8,
    image: 'https://avatars.mds.yandex.net/get-altay/13444254/2a00000190f346f63006ec220ec6455a9b13/XXXL',
    categories: ['Football', 'Outdoor'],
    latitude: 55.7320,
    longitude: 37.6011
  },
  {
    id: '3',
    name: 'Riverside Track',
    type: 'Running Track',
    address: '789 River Road, East Side',
    rating: 4.2,
    image: 'https://avatars.mds.yandex.net/i?id=601816edf4c1c50b43045c87eef2a91c_l-5652925-images-thumbs&n=13',
    categories: ['Running', 'Outdoor'],
    latitude: 55.7175,
    longitude: 37.5251
  },
  {
    id: '4',
    name: 'West Side Swimming Club',
    type: 'Swimming Pool',
    address: '101 Pool Lane, West District',
    rating: 4.7,
    image: 'https://avatars.mds.yandex.net/i?id=019f837b8d93b55b64bfa13f7392502b_l-12629451-images-thumbs&n=13',
    categories: ['Swimming', 'Indoor'],
    latitude: 55.7604,
    longitude: 37.6192
  },
  {
    id: '5',
    name: 'Mountain View Tennis Club',
    type: 'Tennis Courts',
    address: '202 Racket Street, North Side',
    rating: 4.4,
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/6c/3e/97/five-tennis-courts-featuring.jpg',
    categories: ['Tennis', 'Outdoor'],
    latitude: 55.7568,
    longitude: 37.5865
  },
];

// Categories for filtering
const CATEGORIES = ['All', 'Gym', 'Football', 'Running', 'Swimming', 'Tennis', 'Indoor', 'Outdoor'];

export default function MapScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter locations based on selected category
  const filteredLocations = selectedCategory === 'All'
    ? SPORTS_LOCATIONS
    : SPORTS_LOCATIONS.filter(location => 
        location.categories.includes(selectedCategory)
      );

  const handleBooking = (id: string) => {
    // In a real app, this would navigate to a booking screen or open a booking modal
    console.log(`Booking location with ID: ${id}`);
  };

  const handleLocationPress = (id: string) => {
    // In a real app, this would navigate to a location detail screen
    console.log(`Viewing details for location with ID: ${id}`);
  };

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No locations found for this category.</Text>
      <Text style={styles.emptySubtext}>Try selecting a different category.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <MapComponent
        locations={filteredLocations}
        onLocationPress={handleLocationPress}
      />
      
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Nearby Locations</Text>
        
        <FlatList
          data={filteredLocations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SportLocationCard
              name={item.name}
              type={item.type}
              address={item.address}
              rating={item.rating}
              image={item.image}
              onPress={() => handleLocationPress(item.id)}
              onBook={() => handleBooking(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={renderEmptyList}
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
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#E1E8ED',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  mapText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  mapSubtext: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#222',
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
  map: {
    height: 200,
    width: '100%',
    borderRadius: 12,
    marginVertical: 16,
  },
});