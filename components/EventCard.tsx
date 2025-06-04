import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, MapPin, Clock } from 'lucide-react-native';

interface EventCardProps {
  title: string;
  type: string;
  date: string;
  location: string;
  time: string;
  image: string;
  onPress: () => void;
  onRegister: () => void;
}

export default function EventCard({
  title,
  type,
  date,
  location,
  time,
  image,
  onPress,
  onRegister,
}: EventCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.type}>{type}</Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Calendar size={16} color="#666666" />
            <Text style={styles.detailText}>{date}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <MapPin size={16} color="#666666" />
            <Text style={styles.detailText}>{location}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Clock size={16} color="#666666" />
            <Text style={styles.detailText}>{time}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.registerButton} onPress={onRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
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
  registerButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
  },
  registerButtonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  },
});