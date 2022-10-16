import React from 'react';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/Spacer';
import { Text } from '../../../components/typography/Typography';
import {
  Address,
  Icon,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
} from './RestaurantInfoCardStyles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Algum Restaurante',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = 'Alguma Rua Qualquer, 100',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const starArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {starArray.map((_, idx) => (
              <SvgXml key={idx} height={20} width={20} xml={star} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text variant="error">FECHADO AGORA</Text>}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml height={20} width={20} xml={open} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
