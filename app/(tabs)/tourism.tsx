import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';
import TourismPackageCard from '@/components/TourismPackageCard';
import CategoryFilter from '@/components/CategoryFilter';

// Mock data for tourism packages
const TOURISM_PACKAGES = [
  {
    id: '1',
    title: 'Bali Yoga Retreat',
    type: 'Yoga',
    location: 'Bali, Indonesia',
    duration: '7 days / 6 nights',
    groupSize: '10-15 people',
    price: 1299,
    image: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/153316689.jpg?k=dcc39d230fed2e1126cd21220815812dd2daa0e9f75ea91a05da1805610471e1&o=',
    category: 'Yoga',
  },
  {
    id: '2',
    title: 'Alps Hiking Adventure',
    type: 'Hiking',
    location: 'Swiss Alps',
    duration: '5 days / 4 nights',
    groupSize: '8-12 people',
    price: 1499,
    image: 'https://avatars.mds.yandex.net/i?id=7861fe6859538561beee1dd0cb9ccab3_l-5859964-images-thumbs&n=13',
    category: 'Hiking',
  },
  {
    id: '3',
    title: 'Mediterranean Sailing',
    type: 'Yachting',
    location: 'Greek Islands',
    duration: '10 days / 9 nights',
    groupSize: '6-8 people',
    price: 2999,
    image: 'https://avatars.mds.yandex.net/i?id=0bcbde4178844bbbf321fa1333e106cfd171beb0-7946262-images-thumbs&n=13',
    category: 'Yachting',
  },
  {
    id: '4',
    title: 'Tour de France Experience',
    type: 'Cycling',
    location: 'France',
    duration: '14 days / 13 nights',
    groupSize: '10-15 people',
    price: 3499,
    image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66b31fc101c93b2913162bcd_66b32027ad590e355fed54e5/scale_1200',
    category: 'Cycling',
  },
  {
    id: '5',
    title: 'Everest Base Camp Trek',
    type: 'Trekking',
    location: 'Nepal',
    duration: '16 days / 15 nights',
    groupSize: '8-12 people',
    price: 2799,
    image: 'https://n1s1.hsmedia.ru/db/62/c0/db62c086e1f61356c0da645629ef6b8d/1456x809_1_9229aa7bad47bf3144729de6f72ad9b8@4500x2500_0xPKUQVm8m_8823798728399556912.jpg.webp',
    category: 'Trekking',
  },
];

// Categories for filtering
const CATEGORIES = ['All', 'Yoga', 'Hiking', 'Trekking', 'Yachting', 'Cycling', 'Fitness'];

export default function TourismScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter packages based on selected category
  const filteredPackages = selectedCategory === 'All'
    ? TOURISM_PACKAGES
    : TOURISM_PACKAGES.filter(pkg => 
        pkg.category === selectedCategory
      );

  const handlePackagePress = (id: string) => {
    // In a real app, this would navigate to a package detail screen
    console.log(`Viewing details for package with ID: ${id}`);
  };

  const handleBooking = (id: string) => {
    // In a real app, this would navigate to a booking screen
    console.log(`Booking package with ID: ${id}`);
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
          data={filteredPackages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TourismPackageCard
              title={item.title}
              type={item.type}
              location={item.location}
              duration={item.duration}
              groupSize={item.groupSize}
              price={item.price}
              image={item.image}
              onPress={() => handlePackagePress(item.id)}
              onBook={() => handleBooking(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No packages found for this category.</Text>
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