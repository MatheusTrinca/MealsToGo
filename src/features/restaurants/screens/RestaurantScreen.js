import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/Spacer';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Buscar"
        />
      </SearchContainer>
      <RestaurantList
        data={[{ name: '1' }, { name: 2 }]}
        keyExtractor={(item) => item.name}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};
