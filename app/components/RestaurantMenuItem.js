import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextLarge from './TextLarge';
import TextMedium from './TextMedium';
import AppButton from './AppButton';
import AddButton from './AddButton';

export default function RestaurantMenuItem() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TextLarge>Mexican Boco</TextLarge>
        <TextMedium>Rs. 100</TextMedium>
      </View>
      <View>
        <AddButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
