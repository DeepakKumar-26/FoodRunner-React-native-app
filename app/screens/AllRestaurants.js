import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardRestaurants from '../components/CardRestaurants';
import Input from '../components/Input';

import Screen from '../components/Screen';

export default function AllRestaurants({navigation}) {
  return (
    <Screen>
      <View style={styles.form}>
        <Input icon="magnify" placeholder="Search Restaurants" />
      </View>
      <View style={styles.container}>
        <CardRestaurants onPress={()=>navigation.navigate("Restaurant Details")}/>
        <CardRestaurants />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F9F9F9',
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  form: {
    paddingHorizontal: 10,
    //  backgroundColor:'red'

    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: 'transparent',
  },
});
