import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Location = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
};

type MapComponentProps = {
  locations: Location[];
  onLocationPress: (id: string) => void;
};

export default function MapComponent({ locations }: MapComponentProps) {
  return (
    <View style={styles.mapPlaceholder}>
      <Text style={styles.mapText}>Map View</Text>
      <Text style={styles.mapSubtext}>
        Maps are currently available only in the mobile app
      </Text>
      <Text style={styles.locationCount}>
        {locations.length} locations available
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#E1E8ED',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginVertical: 16,
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
    marginBottom: 8,
  },
  locationCount: {
    fontSize: 12,
    color: '#999',
  },
}); 