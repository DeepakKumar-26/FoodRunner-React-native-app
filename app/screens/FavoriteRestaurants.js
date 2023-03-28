import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import CardRestaurants from '../components/CardRestaurants';
import ItemSeperatorComponent from '../components/ItemSeperatorComponent';
import Screen from '../components/Screen';

export default function FavoriteRestaurants({navigation}) {
  const [favRestaurants, setFavRestaurants] = useState([]);

  const getFavRestaurants = async () => {
    const response = await AsyncStorage.getItem('FavouriteRestorants');
    setFavRestaurants(JSON.parse(response));
  };

  const handleSelectRestaurant = item => {
    navigation.navigate('Restaurant Details', {item: item});
  };

  useFocusEffect(
    useCallback(() => {
      getFavRestaurants();
    }, []),
  );

  return (
    <Screen>
      <View style={styles.container}>
        {favRestaurants !== null && favRestaurants?.length > 0 ? (
          <FlatList
            data={favRestaurants}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={ItemSeperatorComponent}
            renderItem={({item}) => (
              <CardRestaurants
                item={item}
                onPress={() => handleSelectRestaurant(item)}
              />
            )}
          />
        ) : (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={styles.containerNothing}>
              <Image
                source={require('../assets/heart.png')}
                style={styles.image}
              />
              <Text style={{alignSelf: 'center', textAlign: 'center'}}>
                Nothing is added to Favourites
              </Text>
            </View>
          </View>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  containerNothing: {
    backgroundColor: '#FFFFE8',
    padding: 10,
    borderRadius: 40,
    width: '50%',
    elevation: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    aspectRatio: 1,
    alignSelf: 'center',
    margin: 5,
  },
});
