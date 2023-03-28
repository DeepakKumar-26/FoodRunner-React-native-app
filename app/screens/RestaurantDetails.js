import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View} from 'react-native';

import TextLarge from '../components/TextLarge';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantMenuItem from '../components/RestaurantMenuItem';
import AppButton from '../components/AppButton';
import {FlatList} from 'react-native-gesture-handler';
import ItemSeperatorComponent from '../components/ItemSeperatorComponent';
import ItemSeperatorRestaurantDetails from '../components/ItemSeperatorRestaurantDetails';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addToFav} from '../utils/functions';

export default function RestaurantDetails({route, navigation}) {
  const [isLiked, setIsLiked] = useState(false);
  const [apiData, setApiData] = useState({});
  const [isCartButtonVisible, setIsCartButtonVisible] = useState(false);
  const resItem = route.params.item;

  var config = {
    method: 'get',
    url: `http://13.235.250.119/v2/restaurants/fetch_result/${resItem.id}`,
    headers: {
      token: 'cb907b4856fdfe',
    },
  };

  axios(config)
    .then(function (response) {
      setApiData(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  const handleAddToFav = async item => {
    setIsLiked(!isLiked);
    await addToFav(item);
  };

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('FavouriteRestorants').then(response => {
        const jsonValue = JSON.parse(response);
        if (jsonValue?.some(i => i.id === resItem.id)) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      });
    }, []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerHeading}>
        <TextLarge>Choose from menu listed below</TextLarge>
        <Icon
          onPress={() => handleAddToFav(resItem)}
          name={isLiked ? 'heart' : 'heart-outline'}
          size={25}
          color="crimson"
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={apiData.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <RestaurantMenuItem item={item} />}
          ItemSeparatorComponent={ItemSeperatorRestaurantDetails}
        />
      </View>

      <View style={{padding: 5}}>
        <AppButton
          title="Proceed to Cart"
          onPress={() => navigation.navigate('My Cart',{resItem})}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    // borderBottomColor:'white',
  },
});
