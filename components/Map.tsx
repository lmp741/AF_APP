import React from 'react';

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

// The actual implementation will be picked up automatically based on the platform
// from either Map.web.tsx or Map.native.tsx
export default function MapComponent(props: MapComponentProps) {
  return null;
} 