import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import CardRestaurants from '../components/CardRestaurants';
import Input from '../components/Input';
import ItemSeperatorComponent from '../components/ItemSeperatorComponent';
import Screen from '../components/Screen';

export default function AllRestaurants({navigation}) {
  const [apiData, setApiData] = useState({});
  // // ......................
  var data = JSON.stringify({
    name: 'Deepak Kumar',
    mobile_number: '6267354345',
    password: '123456',
    address: 'Raipur',
    email: 'chinku4minku2@gmail.com',
  });

  var config = {
    method: 'get',
    url: ' http://13.235.250.119/v2/restaurants/fetch_result/',
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


    const handleSelectRestaurant = (item)=>{
      navigation.navigate("Restaurant Details",{item:item})
    }
  // ...................
  return (
    <Screen>
      <View style={styles.form}>
        <Input icon="magnify" placeholder="Search Restaurants" />
      </View>
      <View style={styles.container}>
        <FlatList
          data={apiData.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CardRestaurants item={item} onPress={()=>handleSelectRestaurant(item)}/>}
          ItemSeparatorComponent={ItemSeperatorComponent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F9F9F9',
    paddingVertical: 5,
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
