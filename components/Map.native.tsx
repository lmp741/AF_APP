import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

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
  // Center the map on the first location or default to Moscow center
  const centerLat = locations[0]?.latitude || 55.751574;
  const centerLon = locations[0]?.longitude || 37.573856;
  
  // Create markers string for all locations
  const markers = locations.map(loc => 
    `L.marker([${loc.latitude}, ${loc.longitude}])
     .addTo(map)
     .bindPopup("${loc.name}<br>${loc.address}")`
  ).join(';');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <style>
          body { margin: 0; }
          #map { height: 100vh; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map').setView([${centerLat}, ${centerLon}], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);
          ${markers}
        </script>
      </body>
    </html>
  `;

  return (
    <WebView
      style={styles.map}
      source={{ html }}
      onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.warn('WebView error: ', nativeEvent);
      }}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    height: 200,
    borderRadius: 12,
    marginVertical: 16,
  },
}); 