import { FlatList, View } from 'react-native';
import React, { useState } from 'react';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/Spacer';
import { SafeArea } from '../../../components/utils/SafeArea';
import { useRestaurantContextProvider } from '../../../services/restaurants/RestaurantsContext';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { restaurants, error, isLoading } = useRestaurantContextProvider();

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Buscar"
        />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};
