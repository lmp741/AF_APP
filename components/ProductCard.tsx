import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ShoppingCart } from 'lucide-react-native';

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
  onPress: () => void;
  onAddToCart: () => void;
}

export default function ProductCard({
  name,
  price,
  description,
  image,
  onPress,
  onAddToCart,
}: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        
        <TouchableOpacity 
          style={styles.addToCartButton} 
          onPress={onAddToCart}
          activeOpacity={0.8}
        >
          <ShoppingCart color="black" size={18} />
          <Text style={styles.addToCartText}>Add to Cart</Text>
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
    width: '48%',
  },
  image: {
    height: 160,
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    color: '#222222',
  },
  price: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
    height: 40,
  },
  addToCartButton: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addToCartText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
});