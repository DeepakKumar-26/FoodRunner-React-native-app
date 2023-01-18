import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import TextMedium from './TextMedium';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextLarge from './TextLarge';
import {addToFav, removeFromFav} from '../utils/functions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

export default function CardRestaurants({item, onPress}) {
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToFav = async item => {
    setIsLiked(!isLiked);
    await addToFav(item);
  };

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('FavouriteRestorants').then(response => {
        const jsonValue = JSON.parse(response);
        if (jsonValue?.some(i => i.id === item.id)) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      });
    }, []),
  );

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: item.image_url,
          }}
        />
      </View>
      <View style={styles.containerDetails}>
        <TextLarge>{item.name}</TextLarge>
        <TextMedium>Rs {item.cost_for_one}/ Person</TextMedium>
      </View>
      <View>
        <Icon
          onPress={() => handleAddToFav(item)}
          name={isLiked ? 'heart' : 'heart-outline'}
          color="red"
          size={25}
        />
        <TextLarge color="#FA7D09">{item.rating}</TextLarge>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  containerDetails: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
});
