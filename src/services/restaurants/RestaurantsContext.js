import React, { createContext, useState, useEffect, useContext } from 'react';

import { restaurantTransform, restaurantsRequest } from './restaurantsService';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantTransform)
        .then((restaurantsData) => {
          setIsLoading(false);
          setRestaurants(restaurantsData);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContextProvider = () => {
  const context = useContext(RestaurantContext);
  return context;
};
