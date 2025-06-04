import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, MapPin, Users } from 'lucide-react-native';

interface TourismPackageCardProps {
  title: string;
  type: string;
  location: string;
  duration: string;
  groupSize: string;
  price: number;
  image: string;
  onPress: () => void;
  onBook: () => void;
}

export default function TourismPackageCard({
  title,
  type,
  location,
  duration,
  groupSize,
  price,
  image,
  onPress,
  onBook,
}: TourismPackageCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.type}>{type}</Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <MapPin size={16} color="#666666" />
            <Text style={styles.detailText}>{location}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Calendar size={16} color="#666666" />
            <Text style={styles.detailText}>{duration}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Users size={16} color="#666666" />
            <Text style={styles.detailText}>{groupSize}</Text>
          </View>
        </View>
        
        <View style={styles.bookingContainer}>
          <Text style={styles.price}>From ${price}</Text>
          <TouchableOpacity style={styles.bookButton} onPress={onBook}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    height: 180,
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
    color: '#222222',
  },
  type: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '600',
    marginBottom: 12,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 8,
  },
  bookingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
  },
  bookButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  bookButtonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  },
});