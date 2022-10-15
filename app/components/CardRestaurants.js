import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import TextMedium from './TextMedium';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextLarge from './TextLarge';

export default function CardRestaurants({onPress}) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }}
        />
      </View>
      <View style={styles.containerDetails}>
        <TextLarge>Pind Tadka</TextLarge>
        <TextMedium>Rs. 280 / Person</TextMedium>
      </View>
      <View>
        <Icon
          onPress={() => setIsLiked(!isLiked)}
          name={isLiked ? 'heart' : 'heart-outline'}
          color="red"
          size={25}
        />
        <TextLarge color="#FA7D09">4.1</TextLarge>
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
    elevation:7,
    shadowColor: 'darkgreen',
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
