import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';
import { spacing } from '../../../utils/sizes';

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Buscar"
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: spacing.md,
  },
  list: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: 'blue',
  },
});
