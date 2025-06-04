import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import { Store } from 'lucide-react-native';

// Mock data for stores
const STORES = [
  {
    id: '1',
    name: 'ProSport',
    description: 'Sports nutrition and accessories',
  },
  {
    id: '2',
    name: 'FitWear',
    description: 'Sports clothing and footwear',
  },
];

const PRODUCTS = [
  {
    id: '1',
    name: 'Protein Powder',
    price: 39.99,
    description: 'High-quality whey protein for muscle recovery and growth.',
    image: 'https://image.made-in-china.com/2f0j00ksSqlrtnZTbW/Customized-Formula-Flavor-High-Protein-Sports-Supplements-Powder-Weight-Gain-Building-Muscle-Powder-Sports-Nutrition-Whey-Protein-Creatine-33.webp',
    category: 'Nutrition',
    storeId: '1',
  },
  {
    id: '2',
    name: 'Fitness Tracker',
    price: 129.99,
    description: 'Advanced fitness tracker with heart rate monitoring and GPS.',
    image: 'https://nypost.com/wp-content/uploads/sites/2/2022/07/41iag5vRGVL._AC_SL1001_.jpg',
    category: 'Accessories',
    storeId: '1',
  },
  {
    id: '3',
    name: 'Running Shoes',
    price: 89.99,
    description: 'Lightweight running shoes with responsive cushioning.',
    image: 'https://cdn1.ozone.ru/s3/multimedia-d/6626816509.jpg',
    category: 'Footwear',
    storeId: '2',
  },
  {
    id: '4',
    name: 'Performance T-shirt',
    price: 34.99,
    description: 'Moisture-wicking fabric for maximum comfort during workouts.',
    image: 'https://avatars.mds.yandex.net/get-mpic/12444182/2a0000018ea3f9633d2b8838e204fabd0438/orig',
    category: 'Clothing',
    storeId: '2',
  },
  {
    id: '5',
    name: 'Creatine Monohydrate',
    price: 24.99,
    description: 'Pure creatine monohydrate for strength and power output.',
    image: 'https://cdn1.ozone.ru/multimedia/1015353345.jpg',
    category: 'Nutrition',
    storeId: '1',
  },
  {
    id: '6',
    name: 'Compression Shorts',
    price: 49.99,
    description: 'High-compression shorts for muscle support during intense activity.',
    image: 'https://avatars.mds.yandex.net/i?id=7aa53800338239271da82cfb91026739_l-10232641-images-thumbs&n=13',
    category: 'Clothing',
    storeId: '2',
  },
];

// Categories for filtering
const CATEGORIES = ['All', 'Nutrition', 'Accessories', 'Clothing', 'Footwear'];

export default function MarketplaceScreen() {
  const [selectedStore, setSelectedStore] = useState(STORES[0].id);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on selected store and category
  const filteredProducts = PRODUCTS.filter(product => {
    const storeMatch = product.storeId === selectedStore;
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    return storeMatch && categoryMatch;
  });

  const handleAddToCart = (id: string) => {
    // In a real app, this would add the product to a shopping cart
    console.log(`Added product with ID ${id} to cart`);
  };

  const handleProductPress = (id: string) => {
    // In a real app, this would navigate to a product detail screen
    console.log(`Viewing details for product with ID: ${id}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.storeSelector}>
        {STORES.map((store) => (
          <TouchableOpacity
            key={store.id}
            style={[
              styles.storeButton,
              selectedStore === store.id && styles.selectedStoreButton,
            ]}
            onPress={() => setSelectedStore(store.id)}
          >
            <Store
              size={20}
              color={selectedStore === store.id ? 'white' : '#555555'}
            />
            <Text
              style={[
                styles.storeButtonText,
                selectedStore === store.id && styles.selectedStoreButtonText,
              ]}
            >
              {store.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <View style={styles.productsContainer}>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              onPress={() => handleProductPress(item.id)}
              onAddToCart={() => handleAddToCart(item.id)}
            />
          )}
          numColumns={2}
          columnWrapperStyle={styles.productRow}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productsList}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No products found for this category.</Text>
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
  storeSelector: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  storeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#F5F5F5',
  },
  selectedStoreButton: {
    backgroundColor: '#0066CC',
  },
  storeButtonText: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 8,
    color: '#555555',
  },
  selectedStoreButtonText: {
    color: 'white',
  },
  productsContainer: {
    flex: 1,
    padding: 16,
  },
  productRow: {
    justifyContent: 'space-between',
  },
  productsList: {
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