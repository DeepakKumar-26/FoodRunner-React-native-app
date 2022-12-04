import React, {useState} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View} from 'react-native';

import TextLarge from '../components/TextLarge';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantMenuItem from '../components/RestaurantMenuItem';
import AppButton from '../components/AppButton';
import {FlatList} from 'react-native-gesture-handler';
import ItemSeperatorComponent from '../components/ItemSeperatorComponent';
import ItemSeperatorRestaurantDetails from '../components/ItemSeperatorRestaurantDetails';

export default function RestaurantDetails({route, navigation}) {
  const [fav, setFav] = useState(false);
  const [apiData, setApiData] = useState({});
  const itemAdded=[];
  const {id} = route.params.item;
  // // ......................
  var config = {
    method: 'get',
    url: `http://13.235.250.119/v2/restaurants/fetch_result/${id}`,
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

  const addToFav = () => {
    setFav(!fav);
  };


  return (
    <View style={styles.container}>
      <View style={styles.containerHeading}>
        <TextLarge>Choose from menu listed below</TextLarge>
        <Icon
          onPress={addToFav}
          name={fav ? 'heart' : 'heart-outline'}
          size={25}
          color="crimson"
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={apiData.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <RestaurantMenuItem item={item}/>}
          ItemSeparatorComponent={ItemSeperatorRestaurantDetails}
        />
      </View>

      {itemAdded && (
        <View style={{padding: 5}}>
          <AppButton
            title="Proceed to Cart"
            onPress={() => navigation.navigate('My Cart')}
          />
        </View>
      )}
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
