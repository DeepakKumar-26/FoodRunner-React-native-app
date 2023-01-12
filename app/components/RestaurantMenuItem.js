import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import TextLarge from './TextLarge';
import TextMedium from './TextMedium';
import AppButton from './AppButton';
import AddButton from './AddButton';

export default function RestaurantMenuItem({item,}) {
  const [addToCart, setAddToCart] = useState(false);

  const handleAddToCart = () => {
    setAddToCart(!addToCart);
  };
  return (
    <View style={styles.container}>
      <View>
        <TextLarge>{item.name}</TextLarge>
        <TextMedium>Rs. {item.cost_for_one}</TextMedium>
      </View>
      <View>
        {/* <AddButton /> */}
        <TouchableOpacity
          onPress={handleAddToCart}
          style={[
            styles.button,
            {backgroundColor: !addToCart ? '#B1B2FF' : '#EC7272'},
          ]}>
          <TextLarge>{!addToCart ? 'Add' : 'Remove'}</TextLarge>
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
