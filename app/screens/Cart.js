import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextLarge from '../components/TextLarge';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantMenuItem from '../components/RestaurantMenuItem';
import AppButton from '../components/AppButton';
import TextMedium from '../components/TextMedium';
import Screen from '../components/Screen';

export default function Cart({navigation}) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.containerHeading}>
          <TextLarge>Choose from menu listed below</TextLarge>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingVertical: 5,
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <TextLarge>Baco Indian</TextLarge>
          <TextLarge>Rs. 200</TextLarge>
        </View>
        <Modal visible={false} animationType="fade">
          <Screen>
            <View style={styles.containerModal}>
              <Image source={require('../assets/food.png')} />
              <TextLarge color="crimson">
                Your order has been successfully placed
              </TextLarge>
            </View>
            <View style={{padding: 10}}>
              <AppButton
                title="Ok"
                color="green"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </Screen>
        </Modal>
        <View style={{padding: 10}}>
          <AppButton
            title="Place Order"
            onPress={() => navigation.navigate('Success')}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#F9F9F9',
    backgroundColor: '#E3FCBF',
  },
  containerHeading: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderBottomWidth: 0.5,
    borderTopColor: 'white',
    borderBottomColor: 'white',
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
  },
});
