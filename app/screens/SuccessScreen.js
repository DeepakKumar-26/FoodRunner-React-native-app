import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';

import Screen from '../components/Screen';
import TextLarge from '../components/TextLarge';

export default function SuccessScreen({navigation}) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image source={require('../assets/food.png')} />
        <TextLarge color="crimson">
          Your order has been successfully placed
        </TextLarge>
      </View>
        <View style={{padding:10}}>
          <AppButton title="Ok" color='green' onPress={()=>navigation.navigate("Home")} />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
