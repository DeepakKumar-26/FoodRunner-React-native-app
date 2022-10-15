import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../components/AppButton';

import Screen from '../components/Screen';

export default function Logout() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image source={require('../assets/food.png')} />
        <Text style={styles.text}>You are leaving so soon...</Text>
      </View>
      <View style={{padding:10}}>
        <AppButton title="Logout"/>
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
