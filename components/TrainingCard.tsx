import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, Clock, Users } from 'lucide-react-native';

interface TrainingCardProps {
  title: string;
  type: string;
  trainer: string;
  schedule: string;
  duration: string;
  participants: string;
  image: string;
  onPress: () => void;
  onBook: () => void;
}

export default function TrainingCard({
  title,
  type,
  trainer,
  schedule,
  duration,
  participants,
  image,
  onPress,
  onBook,
}: TrainingCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.trainer}>with {trainer}</Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Calendar size={16} color="#666666" />
            <Text style={styles.detailText}>{schedule}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Clock size={16} color="#666666" />
            <Text style={styles.detailText}>{duration}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Users size={16} color="#666666" />
            <Text style={styles.detailText}>{participants}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.bookButton} onPress={onBook}>
          <Text style={styles.bookButtonText}>Book Session</Text>
        </TouchableOpacity>
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
    height: 160,
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
    marginBottom: 2,
  },
  trainer: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 12,
    fontStyle: 'italic',
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
  bookButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  },
});