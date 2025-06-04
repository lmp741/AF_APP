import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MessageCircle, Video, Star } from 'lucide-react-native';

interface HealthServiceCardProps {
  title: string;
  specialist: string;
  description: string;
  rating: number;
  chatAvailable: boolean;
  videoAvailable: boolean;
  onPress: () => void;
  onChat: () => void;
  onVideo: () => void;
}

export default function HealthServiceCard({
  title,
  specialist,
  description,
  rating,
  chatAvailable,
  videoAvailable,
  onPress,
  onChat,
  onVideo,
}: HealthServiceCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.specialist}>Specialist: {specialist}</Text>
        
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              color={star <= rating ? '#FFD700' : '#E0E0E0'}
              fill={star <= rating ? '#FFD700' : 'transparent'}
            />
          ))}
          <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
        </View>
        
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
        
        <View style={styles.actionsContainer}>
          {chatAvailable && (
            <TouchableOpacity 
              style={[styles.actionButton, styles.chatButton]} 
              onPress={onChat}
              activeOpacity={0.8}
            >
              <MessageCircle color="black" size={18} />
              <Text style={styles.actionButtonText}>Chat</Text>
            </TouchableOpacity>
          )}
          
          {videoAvailable && (
            <TouchableOpacity 
              style={[styles.actionButton, styles.videoButton]} 
              onPress={onVideo}
              activeOpacity={0.8}
            >
              <Video color="black" size={18} />
              <Text style={styles.actionButtonText}>Video</Text>
            </TouchableOpacity>
          )}
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
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
    color: '#222222',
  },
  specialist: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '600',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
    lineHeight: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  chatButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  videoButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  actionButtonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 8,
  },
});