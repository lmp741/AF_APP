import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import HealthServiceCard from '@/components/HealthServiceCard';
import CategoryFilter from '@/components/CategoryFilter';
import { CircleAlert as AlertCircle } from 'lucide-react-native';

// Mock data for health services
const HEALTH_SERVICES = [
  {
    id: '1',
    title: 'Nutrition Consultation',
    specialist: 'Dr. Emma Richards',
    description: 'Personalized nutrition plans for athletes and active individuals. Improve your performance and recovery through optimal nutrition strategies.',
    rating: 4.9,
    chatAvailable: true,
    videoAvailable: true,
    category: 'Nutrition',
  },
  {
    id: '2',
    title: 'Sports Injury Prevention',
    specialist: 'Dr. James Wilson',
    description: 'Learn proper techniques to prevent common sports injuries. Includes personalized assessment and recommendations based on your sport and body mechanics.',
    rating: 4.7,
    chatAvailable: true,
    videoAvailable: true,
    category: 'Injury Prevention',
  },
  {
    id: '3',
    title: 'Recovery Strategies',
    specialist: 'Lisa Thompson, PT',
    description: 'Advanced recovery protocols for athletes. Maximize your recovery time and minimize downtime between training sessions.',
    rating: 4.6,
    chatAvailable: true,
    videoAvailable: false,
    category: 'Recovery',
  },
  {
    id: '4',
    title: 'Sports Psychology',
    specialist: 'Dr. Mark Anderson',
    description: 'Mental training techniques to improve focus, motivation, and performance under pressure. Develop a champion mindset.',
    rating: 4.8,
    chatAvailable: true,
    videoAvailable: true,
    category: 'Mental Health',
  },
  {
    id: '5',
    title: 'Smoking Cessation for Athletes',
    specialist: 'Dr. Sarah Patel',
    description: 'Specialized program for athletes looking to quit smoking. Improve lung capacity and overall performance with personalized support.',
    rating: 4.5,
    chatAvailable: true,
    videoAvailable: false,
    category: 'Habits',
  },
];

// Categories for filtering
const CATEGORIES = ['All', 'Nutrition', 'Injury Prevention', 'Recovery', 'Mental Health', 'Habits'];

export default function HealthScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter health services based on selected category
  const filteredServices = selectedCategory === 'All'
    ? HEALTH_SERVICES
    : HEALTH_SERVICES.filter(service => 
        service.category === selectedCategory
      );

  const handleServicePress = (id: string) => {
    // In a real app, this would navigate to a service detail screen
    console.log(`Viewing details for health service with ID: ${id}`);
  };

  const handleChat = (id: string) => {
    // In a real app, this would open a chat interface
    console.log(`Starting chat for service with ID: ${id}`);
  };

  const handleVideo = (id: string) => {
    // In a real app, this would open a video call interface
    console.log(`Starting video call for service with ID: ${id}`);
  };

  const handleEmergency = () => {
    // In a real app, this would connect to emergency services
    console.log('Connecting to emergency services');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.emergencyButton}
        onPress={handleEmergency}
        activeOpacity={0.8}
      >
        <AlertCircle color="white" size={20} />
        <Text style={styles.emergencyButtonText}>Emergency Assistance</Text>
      </TouchableOpacity>
      
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <View style={styles.listContainer}>
        <FlatList
          data={filteredServices}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HealthServiceCard
              title={item.title}
              specialist={item.specialist}
              description={item.description}
              rating={item.rating}
              chatAvailable={item.chatAvailable}
              videoAvailable={item.videoAvailable}
              onPress={() => handleServicePress(item.id)}
              onChat={() => handleChat(item.id)}
              onVideo={() => handleVideo(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No health services found for this category.</Text>
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
  emergencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  emergencyButtonText: {
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