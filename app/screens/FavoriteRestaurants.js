import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardRestaurants from '../components/CardRestaurants';
import Screen from '../components/Screen';

export default function FavoriteRestaurants() {
  return (
    <Screen>
      <View style={styles.container}>
        <CardRestaurants />
        <CardRestaurants />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    }
});
