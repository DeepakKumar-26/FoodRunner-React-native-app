import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import TextLarge from '../components/TextLarge';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantMenuItem from '../components/RestaurantMenuItem';
import AppButton from '../components/AppButton';
import TextMedium from '../components/TextMedium';
import Screen from '../components/Screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import Axios from '../utils/axios';

export default function Cart({navigation, route}) {
  const {resItem} = route.params;
  const [items, setItems] = useState([]);
  const [cost, setCost] = useState(0);
  const foodsId = [];

  const getCartItems = async () => {
    const response = await AsyncStorage.getItem('CartItems');
    if (response !== null) {
      setItems(JSON.parse(response));
    }

    calculateCartCost()
  };

  const calculateCartCost = () => {
    let subTotal = 0;
    items.map(item => {
      subTotal += parseInt(item.cost_for_one);
    });
    setCost(subTotal);
  };

  const handlePlaceOrder = async () => {
    const userId = '99';
    const restaurantId = resItem.id;
    const totalCost = cost;
    console.log(foodsId, cost);
    try {
      const response = await Axios.post('place_order/fetch_result/', {
        user_id: '99',
        restaurant_id: restaurantId,
        total_cost: totalCost,
        food: foodsId,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  };



  useEffect(() => {
    getCartItems();
    // calculateCartCost();
    console.log(resItem);
  }, [])
  
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.containerHeading}>
          <TextLarge>Ordering from : {resItem.name}</TextLarge>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            // (cost = cost + parseInt(item.cost_for_one)),
            foodsId.push({food_item_id: item.id}),
            (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                  // backgroundColor: 'crimson',
                }}>
                <TextLarge>{item.name}</TextLarge>
                <TextLarge>{item.cost_for_one}</TextLarge>
              </View>
            )
          )}
        />

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
            title={'Place Order '}
            // onPress={handlePlaceOrder}
            onPress={() => navigation.navigate('Success')}
            // onPress={() => console.log('cot ', totalCost)}
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
