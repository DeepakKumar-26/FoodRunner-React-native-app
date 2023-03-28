import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextLarge from './TextLarge';
import TextMedium from './TextMedium';
import AppButton from './AppButton';
import AddButton from './AddButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RestaurantMenuItem({item}) {
  const [isCartButtonVisible, setIsCartButtonVisible] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = async item => {
    setIsAddedToCart(!isAddedToCart);
    const response = await AsyncStorage.getItem('CartItems');

    if (response !== null) {
      const jsonValue = JSON.parse(response);
      console.log(jsonValue);
      const alreadyAdded = jsonValue?.some(i => i.id == item.id);
      if (alreadyAdded) {
        const updateList = jsonValue?.filter(i => i.id !== item.id);
        await AsyncStorage.setItem(
          'CartItems',
          JSON.stringify([...updateList]),
        );
      } else {
        await AsyncStorage.setItem(
          'CartItems',
          JSON.stringify([...jsonValue, item]),
        );
      }
    } else {
      console.log('Adding 1st time');
      await AsyncStorage.setItem('CartItems', JSON.stringify([item]));
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <TextLarge>{item.name}</TextLarge>
        <TextMedium>Rs. {item.cost_for_one}</TextMedium>
      </View>

        <View>
          <TouchableOpacity
            onPress={() => handleAddToCart(item)}
            style={[
              styles.button,
              {backgroundColor: !isAddedToCart ? '#B1B2FF' : '#EC7272'},
            ]}>
            <TextLarge>{!isAddedToCart ? 'Add' : 'Remove'}</TextLarge>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    backgroundColor: '#E1FFB1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
