import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Screen from '../components/Screen';

export default function Welcome() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image source={require('../assets/food.png')} />
        <Text style={styles.text}>Food Runner</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
});
